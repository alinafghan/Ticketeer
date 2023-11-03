sELECT 'DROP TABLE ' || table_name || ' CASCADE CONSTRAINTS;' 
FROM user_tables;

drop table organizers  CASCADE CONSTRAINTS;
drop table performer_type  CASCADE CONSTRAINTS;
drop table countries  CASCADE CONSTRAINTS;
drop table locations  CASCADE CONSTRAINTS;
drop table venues  CASCADE CONSTRAINTS;
drop table performers  CASCADE CONSTRAINTS;
drop table event_category  CASCADE CONSTRAINTS;
drop table events cascade constraints;
drop table tickets cascade constraints;
drop table seats cascade constraints;
drop table users cascade constraints;
drop table transactions cascade constraints;

CREATE TABLE event_category (
  event_category_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  event_category_name VARCHAR2(255) NOT NULL
);

CREATE TABLE organizers (
  organizer_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  organizer_name VARCHAR2(255) NOT NULL
);

CREATE TABLE performer_type (
  performer_type_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  type_name VARCHAR2(255) NOT NULL
);
CREATE TABLE performer_type_A (
  performer_type_A_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_type_A_name VARCHAR2(255) NOT NULL
);
CREATE TABLE performer_type_B (
  performer_type_B_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_type_B_name VARCHAR2(255) NOT NULL
);

CREATE TABLE countries (
  country_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  country_name VARCHAR(255) NOT NULL
);

CREATE TABLE locations (
  location_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  location_name varchar(255) NOT NULL,
  country_id INT NOT NULL,
  CONSTRAINT country_fk FOREIGN KEY (country_id) REFERENCES countries (country_id)
);


CREATE TABLE performers (
  performer_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_name VARCHAR(255),
  performer_type INT,
  CONSTRAINT performer_type_fk FOREIGN KEY (performer_type) REFERENCES performer_type (performer_type)
);

CREATE TABLE events (
  event_id INT PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  venue_id INT NOT NULL,
  event_date DATE NOT NULL,
  start_time TIMESTAMP(0) NOT NULL,
  end_time TIMESTAMP(0),
  organizer_id INT NOT NULL,
  performer_id INT NOT NULL,
  event_category_id INT NOT NULL,
  num_of_tickets INT NOT NULL,
  num_of_VIP_tickets int not null,
  num_of_general_tickets int not null,
  CONSTRAINT venue_fk FOREIGN KEY (venue_id) REFERENCES venues (venue_id),
  CONSTRAINT organizer_fk FOREIGN KEY (organizer_id) REFERENCES organizers (organizer_id),
  CONSTRAINT performer_fk FOREIGN KEY (performer_id) REFERENCES performers (performer_id),
  CONSTRAINT event_category_fk FOREIGN KEY (event_category_id) REFERENCES event_category (event_category_id)
);

--autoincrement of events, it needs to be done in a sequence and not within the table itself because this trigger must occur before the trigger
--that creates the tickets, so it needs the event_ID and both occur before the row gets added in table.
CREATE SEQUENCE event_ID_seq INCREMENT BY 1 START WITH 1; 
drop sequence event_ID_seq;

CREATE OR REPLACE TRIGGER event_ID_control
BEFORE INSERT ON events
FOR EACH ROW
BEGIN
SELECT event_ID_seq.NEXTVAL
INTO :new.event_ID
FROM DUAL;
END;
/

INSERT INTO events (event_name, venue_id, event_date, start_time, end_time, organizer_id, performer_id, event_category_id, num_of_tickets, num_of_VIP_tickets,num_of_general_tickets)
VALUES ('Random Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 5,1,1);

select * from events;
select * from tickets;

create or replace trigger ticket_creation_trigger before insert on events for each row
declare 
n int := 0;
begin
while n < :new.num_of_tickets loop
insert into tickets (event_id,ticket_type, venue_id, booked) values (:new.event_id,1,:new.venue_id,'n');
n := n +1;
end loop;
end;

--preemptively gives the first seat of the venue that hasnt been given to a ticket already and assigns that value to a ticket.
create or replace trigger ticket_seat_num before insert on tickets for each row 
declare 
numseat int;
begin 
select seat_num into :new.seat_num from seats where venue_id = :new.venue_id and booked = 'n' fetch first 1 row only;
update seats set booked = 'y' where seat_num = :new.seat_num;
end;

create or replace trigger too_many_ticks before insert on events for each row 
declare 
not_enough_space exception;
maximum int;
begin
select venue_capacity into maximum from venues where venue_id = :new.venue_id;
if :new.num_of_tickets > maximum then
raise not_enough_space;
end if;
end;

insert into tickets (event_id,ticket_type,venue_id,booked) values (2,1,1,'0');


CREATE TABLE venues (
  venue_id INT PRIMARY KEY,
  venue_name VARCHAR(255) NOT NULL,
  venue_capacity INT NOT NULL,
  num_of_pit_seats int not null,
  num_of_general_seats int not null,
  num_of_balcony_seats int not null,
  location_id INT NOT NULL,
  CONSTRAINT location_fk FOREIGN KEY (location_id) REFERENCES locations (location_id)
);


--autoincrement of venues, it needs to be done in a sequence and not within the table itself because this trigger must occur before the trigger
--that creates the seats, so it needs the venue_ID and both occur before the row gets added in table.
CREATE SEQUENCE venue_ID_seq INCREMENT BY 1 START WITH 1; 
drop sequence venue_ID_seq;


CREATE OR REPLACE TRIGGER venue_ID_control
BEFORE INSERT ON venues
FOR EACH ROW
BEGIN
SELECT venue_ID_seq.NEXTVAL
INTO :new.venue_ID
FROM DUAL;
END;
/

select * from venues;
select * from seats;

INSERT INTO venues (venue_name, venue_capacity,num_of_pit_seats,num_of_general_seats,num_of_balcony_seats, location_id) VALUES ('yankee stadium', 10,5,5,5, 1);
INSERT INTO venues (venue_name, venue_capacity,num_of_pit_seats,num_of_general_seats,num_of_balcony_seats, location_id) VALUES ('test', 10,2,3,5,1);
INSERT INTO venues (venue_name, venue_capacity,num_of_pit_seats,num_of_general_seats,num_of_balcony_seats, location_id) VALUES ('another vanue', 15,5,5,5,1);

--func for auto creating entries for pit,general and balcony seats everytime a new venue is added
create or replace trigger fill_seats after insert on venues for each row
declare
max_pit_capacity int := :new.num_of_pit_seats;
max_gen_capacity int := :new.num_of_general_seats;
max_balcony_capacity int := :new.num_of_balcony_seats;
begin
for i in 1..max_pit_capacity loop
insert into seats (seat_type,venue_id,booked) values (1,:new.venue_id,'n');
end loop;
for i in 1..max_gen_capacity loop
insert into seats (seat_type,venue_id,booked) values (2,:new.venue_id,'n');
end loop;
for i in 1..max_balcony_capacity loop
insert into seats (seat_type,venue_id,booked) values (3,:new.venue_id,'n');
end loop;
end;

select * from venues;
select * from seats;

INSERT INTO venues (venue_name, venue_capacity,num_of_pit_seats,num_of_general_seats,num_of_balcony_seats, location_id)
VALUES ('seat_test', 10,2,3,5,1);


create table tickets(
ticket_id int,
event_id int NOT NULL,
ticket_type int NOT NULL,
seat_num int NOT NULL,
venue_id int NOT NULL,
booked char(1),
primary key(ticket_id,event_id),
constraint tickets_event_fk foreign key (event_id) references events(event_id),
constraint tickets_venue_fk foreign key (venue_id) references venues(venue_id),
constraint tickets_seat_num_fk foreign key (seat_num,venue_id) references seats(seat_num,venue_id),
CONSTRAINT tickets_ticket_type_fk foreign key (ticket_type) references ticket_type(ticket_type)
);

drop table tickets;


create sequence ticket_id_seq;

create or replace trigger ticket_id_auto_increment before insert on tickets for each row 
begin
  SELECT coalesce(MAX(ticket_id), -1) + 1
  INTO :NEW.ticket_id
  FROM tickets
  WHERE event_id = :NEW.event_id;
END;
/


CREATE TABLE seats (
  seat_num INT,
  seat_type int not null,
  venue_id INT,
  booked char(1),
  PRIMARY KEY (seat_num,venue_id),
  CONSTRAINT seatvenue_fk FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
  constraint seat_type_fk foreign key (seat_type) references seat_type(seat_type_id)
);

create table seat_type(
seat_type_id int GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
seat_type_name varchar(255) 
);

insert into seat_type (seat_type_name) values ('pit');
insert into seat_type (seat_type_name) values ('general');
insert into seat_type (seat_type_name) values ('balcony');


CREATE SEQUENCE seat_num_seq;
drop sequence seat_num_seq;

CREATE OR REPLACE TRIGGER seats_autoincrement
BEFORE INSERT ON seats
FOR EACH ROW
BEGIN
  SELECT coalesce(MAX(seat_num), -1) + 1
  INTO :NEW.seat_num
  FROM seats
  WHERE venue_id = :NEW.venue_id;
END;
/

create table ticket_type(
ticket_type INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
ticket_type_name VARCHAR2(255) NOT NULL
);

insert into ticket_type (ticket_type_name) values ('cool');



INSERT INTO event_category (event_category_name) VALUES ('Concert');
INSERT INTO event_category (event_category_name) VALUES ('Sports Event');
select * from event_category;

INSERT INTO performer_type(type_name) VALUES('Musician');
INSERT INTO performer_type(type_name) VALUES('Comedian');
select * from performer_type;

INSERT INTO performers (performer_name, performer_type) VALUES ('The Strokes', 1);

INSERT INTO organizers (organizer_name) VALUES ('Sample Organizer');

INSERT INTO countries (country_name) VALUES ('USA');

INSERT INTO locations (location_name,country_id) VALUES ('new york',1);

INSERT INTO venues (venue_name, venue_capacity, location_id) VALUES ('yankee stadium', 7000, 1);

INSERT INTO venues (venue_name, venue_capacity, location_id) VALUES ('test', 10, 1);
INSERT INTO venues (venue_name, venue_capacity, location_id) VALUES ('another vanue', 10000, 1);
select * from venues;

insert into seats(seat_type,venue_id) values ('VIP',1);
insert into seats(seat_type,venue_id) values ('VIP',1);
insert into seats(seat_type,venue_id) values ('VIP',2);
insert into seats(seat_type,venue_id) values ('VIP',2);
insert into seats(seat_type,venue_id) values ('VIP',1);
select * from seats;
select * from seats where venue_id = 1;

INSERT INTO events (event_name, venue_id, event_date, start_time, end_time, organizer_id, performer_id, event_category_id, num_of_tickets)
VALUES ('Random Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 2);

INSERT INTO events (event_name, venue_id, event_date, start_time, end_time, organizer_id, performer_id, event_category_id, num_of_tickets)
VALUES ('Strokes Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 7000);


insert into tickets (event_id,ticket_type,seat_num) values (1,1,1);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,2);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,3);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,4);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,1);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,2);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,3);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,4);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,4);
select * from tickets;

select * from locations;
select * from event_category;
select * from organizers;
select * from performers;
select * from venues;
select * from events;

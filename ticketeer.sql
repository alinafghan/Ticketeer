CREATE TABLE event_category (
  event_category_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  event_category_name VARCHAR2(255) NOT NULL
);

CREATE TABLE organizers (
  organizer_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  organizer_name VARCHAR2(255) NOT NULL
);

CREATE TABLE performer_type (
  performer_type INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  type_name VARCHAR2(255) NOT NULL
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



CREATE TABLE venues (
  venue_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  venue_name VARCHAR(255) NOT NULL,
  venue_capacity INT NOT NULL,
  location_id INT NOT NULL,
  CONSTRAINT location_fk FOREIGN KEY (location_id) REFERENCES locations (location_id)
);

CREATE TABLE performers (
  performer_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_name VARCHAR(255),
  performer_type INT,
  CONSTRAINT performer_type_fk FOREIGN KEY (performer_type) REFERENCES performer_type (performer_type)
);

CREATE TABLE events (
  event_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  event_name VARCHAR(255) NOT NULL,
  venue_id INT NOT NULL,
  event_date DATE NOT NULL,
  start_time TIMESTAMP(0) NOT NULL,
  end_time TIMESTAMP(0),
  organizer_id INT NOT NULL,
  performer_id INT NOT NULL,
  event_category_id INT NOT NULL,
  num_of_tickets INT NOT NULL,
  CONSTRAINT venue_fk FOREIGN KEY (venue_id) REFERENCES venues (venue_id),
  CONSTRAINT organizer_fk FOREIGN KEY (organizer_id) REFERENCES organizers (organizer_id),
  CONSTRAINT performer_fk FOREIGN KEY (performer_id) REFERENCES performers (performer_id),
  CONSTRAINT event_category_fk FOREIGN KEY (event_category_id) REFERENCES event_category (event_category_id)
);

create table ticket_type(
ticket_type INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  ticket_type_name VARCHAR2(255) NOT NULL
);

insert into ticket_type (ticket_type_name) values ('cool');


create sequence ticket_id_seq;

create table tickets(
ticket_id int,
event_id int NOT NULL,
ticket_type int NOT NULL,
seat_num int NOT NULL,
primary key(ticket_id,event_id),
constraint event_fk foreign key (event_id) references events(event_id),
CONSTRAINT ticket_type_fk foreign key (ticket_type) references ticket_type(ticket_type)
);

create or replace trigger ticket_id_auto_increment before insert on tickets for each row 
begin
  SELECT NVL(MAX(ticket_id), -1) + 1
  INTO :NEW.ticket_id
  FROM tickets
  WHERE event_id = :NEW.event_id;
END;
/


CREATE TABLE seats (
  seat_num INT,
  seat_type VARCHAR(255),
  venue_id INT,
  PRIMARY KEY (seat_num,venue_id),
  CONSTRAINT seatvenue_fk FOREIGN KEY (venue_id) REFERENCES venues(venue_id)
);

CREATE SEQUENCE seat_num_seq;

CREATE OR REPLACE TRIGGER seats_autoincrement
BEFORE INSERT ON seats
FOR EACH ROW
BEGIN
  SELECT NVL(MAX(seat_num), -1) + 1
  INTO :NEW.seat_num
  FROM seats
  WHERE venue_id = :NEW.venue_id;
END;
/




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
VALUES ('Random Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 7000);

INSERT INTO events (event_name, venue_id, event_date, start_time, end_time, organizer_id, performer_id, event_category_id, num_of_tickets)
VALUES ('Strokes Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 7000);

/*
insert into tickets (event_id,ticket_type,seat_num) values (1,1,1);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,2);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,3);
insert into tickets (event_id,ticket_type,seat_num) values (1,1,4);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,1);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,2);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,3);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,4);
insert into tickets (event_id,ticket_type,seat_num) values (2,1,4);
select * from tickets; */

select * from locations;
select * from event_category;
select * from organizers;
select * from performers;
select * from venues;
select * from events;


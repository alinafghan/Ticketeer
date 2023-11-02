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
drop table performer_type;

CREATE TABLE performer_type_A (
  performer_type_A_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_type_id INT NOT NULL,
  description VARCHAR(255),
  CONSTRAINT performer_type_A_fk FOREIGN KEY (performer_type_id) REFERENCES performer_type (performer_type)
);

CREATE TABLE performer_type_B (
  performer_type_B_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1) PRIMARY KEY,
  performer_type_id INT NOT NULL,
  description VARCHAR(255),
  CONSTRAINT performer_type_B_fk FOREIGN KEY (performer_type_id) REFERENCES performer_type (performer_type)
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

CREATE SEQUENCE venue_seq
  START WITH 1
  INCREMENT BY 1;

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
drop table performers;

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

create table tickets(
ticket_id int GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
event_id int NOT NULL,
ticket_type int NOT NULL,
seat_num int NOT NULL,
primary key(ticket_id,event_id),
constraint event_fk foreign key (event_id) references events(event_id),
CONSTRAINT ticket_type_fk foreign key (ticket_type) references ticket_type(ticket_type)
);

create table users(
user_id int GENERATED ALWAYS AS IDENTITY primary key, 
username varchar(255) NOT NULL,
email varchar(255) check (email like '%@%') NOT NULL,
phone_number int check (length(phone_number)<16) NOT NULL,
pass_word varchar(255) check (length(pass_word)>5),
num_of_tickets_booked int,
location_id INT NOT NULL,
CONSTRAINT location_user FOREIGN KEY (location_id) REFERENCES locations (location_id)
);

create table transactions(
user_id int,
ticket_id int,
event_id int,
amt_paid decimal,
transaction_time timestamp,
primary key (user_id,ticket_id),
constraint user_id_fk foreign key (user_id) references users(user_id),
constraint ticket_id_fk foreign key (ticket_id,event_id) references tickets(ticket_id,event_id)
)

drop table seats;

CREATE TABLE seats (
  seat_id INT GENERATED ALWAYS AS IDENTITY (START WITH 1 INCREMENT BY 1),
  seat_num INT,
  seat_type VARCHAR(255),
  venue_id INT,
  PRIMARY KEY (seat_id),
  CONSTRAINT seatvenue_fk FOREIGN KEY (venue_id) REFERENCES venues(venue_id),
  CONSTRAINT venue_capacity_check CHECK (
    seat_num <= (SELECT venue_capacity FROM venues WHERE venues.venue_id = venue_id)
  )
);


-- Insert seats for venue 1
INSERT INTO seats (seat_type, venue_id)
VALUES ('Regular', 1);

INSERT INTO seats (seat_type, venue_id)
VALUES ('VIP', 1);

INSERT INTO venues (venue_name, location_id, venue_capacity)
values('yankee', 1, 70);

-- Insert seats for venue 2
INSERT INTO seats (seat_type, venue_id)
VALUES ('Regular', 2);

INSERT INTO seats (seat_type, venue_id)
VALUES ('VIP', 2);

select * from seats;

INSERT INTO event_category (event_category_name)
VALUES ('Concert');
INSERT INTO event_category (event_category_name)
VALUES ('Sports Event');
select * from event_category;

INSERT INTO performer_type(type_name)
VALUES('Musician');
select * from performer_type;

INSERT INTO performers (performer_name, performer_type) VALUES ('The Strokes', 1);

INSERT INTO organizers (organizer_name) VALUES ('Sample Organizer');

INSERT INTO countries (country_name) VALUES ('USA');

INSERT INTO locations (location_name,country_id) VALUES ('new york',1);

INSERT INTO venues (venue_name, venue_capacity, location_id) VALUES ('yankee stadium', 7000, 1);

INSERT INTO events (event_name, venue_id, event_date, start_time, end_time, organizer_id, performer_id, event_category_id, num_of_tickets)
VALUES ('Strokes Concert', 1, TO_DATE('2023-10-31', 'YYYY-MM-DD'), TO_TIMESTAMP('15:00:00', 'HH24:MI:SS'), TO_TIMESTAMP('18:00:00', 'HH24:MI:SS'), 1, 1, 1, 7000);

select * from events;

create table events(
event_id int primary key,
event_name varchar(255),
venue_id int,
event_date timestamp,
start_time timestamp,
end_time timestamp,
organizer_id int,
performer_id int,
event_category_id int,
num_of_tickets int,
constraint venue_fk foreign key(venue_id) references Venues(venue_id),
constraint organizer_fk foreign key(organizer_id) references Organizers(organizer_id),
constraint performer_fk foreign key(performer_id) references Performers(performer_id),
constraint event_category_fk foreign key(event_category_id) references event_category(event_category_id)
)


create table venues(
venue_id int primary key,
venue_name varchar(255),
venue_capacity int,
location_id int,
constraint locations_fk foreign key(location_id) references locations(location_id)
);

create table event_category(
event_category_id int primary key
);

create table organizers(
organizer_id int primary key
);

create table performers(
performer_id int primary key,
performer_name varchar(255),
performer_type int,
constraint type_fk foreign key(performer_type) references performer_type(performer_type)
);

create table performer_type(
performer_type int primary key,
type_name varchar(255)
)

create table performer_type_A(
performer_type_A int,
performer_type int,
desc varchar(255),
primary key(performer_type_A,performer_type),
constraint performer_type_fk foreign key (performer_type) references performer_type(performer_type)
)

create table performer_type_B(
performer_type_B int,
performer_type int,
desc varchar(255),
primary key(performer_type_B,performer_type),
constraint performer_type_B_fk foreign key (performer_type) references performer_type(performer_type)
)

create table locations(
location_id int primary key,
country_id int,
constraint country_fk foreign key(country_id) references countries(country_id)
)

create table countries(
country_id int primary key
)


create sequence ticket_count
minvalue 1
start with 1
increment by 1
cache 10;

create table tickets(
ticket_id int,
event_id int,
ticket_type int,
seat_num int,
primary key(ticket_id,event_id),
constraint event_fk foreign key (event_id) references events(event_id)
)
drop table tickets;

--insert into tickets(ticket_id,event_id,ticket_type,seat_num) values (ticket_count.nextval,1,2,3)

create table users(
user_id int primary key, 
username varchar(255),
email varchar(255) check (email like '%@%'),
phone_number int check (length(phone_number)<16),
pass_word varchar(255) check (length(pass_word)>5),
city_state_country varchar(255),
num_of_tickets_booked int
)

drop table users;

create table seats(
seat_num int primary key,
seat_type varchar(255),
venue_id int,
constraint seatvenue_fk foreign key (venue_id) references venues(venue_id)
)

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








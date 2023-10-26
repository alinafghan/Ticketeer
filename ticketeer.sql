create table events(
event_id int primary key,
event_name varchar(255),
venue_id int,
event_date date,
start_time time,
end_time time,
organizer_id int,
performer_id int,
event_category_id int,
num_of_tickets int,
constraint venue_fk foreign key(venue_id) references Venues(venue_id),
constraint organizer_fk foreign key(organizer_id) references Organizers(organizer_id),
constraint performer_fk foreign key(performer_id) references Performers(performer_id),
constraint event_category_fk foreign key(event_category_id) references event_category(event_category_id)
);


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

create table locations(
location_id int primary key,
country_id int,
constraint country_fk foreign key(country_id) references country(country_id)
)





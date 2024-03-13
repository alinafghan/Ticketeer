# Ticketeer - Databases Project

## Alina Afghan (24491) & Hiba Mallick (24015)

### Business Scenario

With the rise in ticketed events, it can be difficult to buy tickets for each event from individual venues/performers. A ticket management system, like Ticketeer, aims to solve this problem by allowing users to book tickets for all types of ticketed events on one platform.
Users can book and purchase tickets for a variety of event categories, from their favorite performers and organizations in the venue and timing of their choice.

### Business Rules

Explanation of the core business rules and use cases:
Performers of varying types can create and schedule different types of events on the site for users to buy tickets for.
They can also connect with venues in different regions and locations, see their availability and schedule their events there.
Users can browse through events.
Users can filter events by date, venues, performers, organizers and event categories.
Users can view events for each date, venue, performer, organizer and event category.
Users can book tickets and perform transactions
An event can only be scheduled for one day. For a multiple-day event, book multiple events
can register as user, or performer. performer can only organize their own events, user can only book tickets. if a performer wants to book tickets they need to register a performer account with a different set of priveleges
An event must have a number of tickets assigned at creation
Number of tickets can be updated later

### Entities, Attributes, and Relationships

Detailed description of entities, attributes, and relationships including multiplicity constraints:

Events
event_id(int, primary key),event_name (varchar(255)),venue_id(int, foreign key),event_date(date),event_start_time(time),event_end_time(time),performer(int, foreign key),organizer_id(int, foreign key),event_category_id(int, foreign key),num_of_tickets(int)
venues, performers, organizers, event_category
many (events) to many (venues)

many (events) to many (performers)
one(event) to one (event_category)
many (events) to one (organizers)

Venues
venue_id(primary key), venue_name(varchar), capacity(int), location_id(int, foreign key)
locations, events
many (venues) to one (location)
many(venues) to many (events)

Location
location_id(primary key, int), country_id(foreign key, int)
country, venues
many (locations) to one (country)
one (location) to many (venues)

Country
country_id(primary key)
location
one (country ) to many (locations)

Event Category
event_category_id(primary key)
events
one (event_category_id) to one (event)

Organizer
organizer_id(primary key), organizer_name(varchar)
events
one (organizer) to many (events)
Performer
performer_id int primary key
performer_name varchar255
email varchar(255)
phone_number int
password varchar(255)
city_state_country varchar(255)
performer_type int foreign key

events, performer_type
many (performers) to many (events)

one (performer) to one (performer_type)
performer type
performer_type_id(primary key int)
type_name(varchar255)

performer
one (performer) to one (performer_type)
performer_type_A(single)
performer_type_A_id(int primary key)
desc (varchar255),
performer_type (int primary key foreign key)
performer

musician, comedian, influencer
one (performer) to one (performer_type_A)

one-to-one
one-to-one
one-to-one
musician
performer_A_type (int primary key foreign key)
performer_type (int primary key foreign key)

performer_type_A
one-to-one
comedian
performer_A_type (int primary key foreign key)
performer_type (int primary key foreign key)
performer_type_A
one-to-one
influencer
performer_A_type (int primary key foreign key)
performer_type (int primary key foreign key)
performer_type_A
one-to-one
performer_type_B
performer_type_B_id(int primary key),
desc (varchar255),performer_type (int primary key foreign key)
performer
one (performer) to one (performer_type_B)
User
user_id int primary key
username varchar(255)
email varchar(255)
phone_number int
password varchar(255)
city_state_country varchar(255)
num_of_tickets_booked int

transaction
one(user) to many (transactions)
Seat
seat_num(int primary key), venue_id(int foreign key)
venues
ticket
many seats in one venue
one seat to one ticket
Transaction
ticket_id (int primary key foreign key)
user_id (int primary key foreign key)
amt_paid (decimal)
transaction_time (datetime)

user
ticket
many (transactions) to one (user)
one (transaction) to many (tickets)
Ticket
ticket_id (int primary key), event_id (int foreign key)
ticket_type (varchar255)
seat_num (int foreign key)

seat
transaction
event
one (ticket) to one (seat)
many (tickets) to one (transaction)
many (tickets) to one (event)

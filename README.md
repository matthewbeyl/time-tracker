CREATE DATABASE "weekend5"

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    description TEXT 
);

CREATE TABLE entry(
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES "projects",
    notes TEXT,
    date INT,
    time INT  
);

<!-- dummy data
INSERT INTO "projects" ("title", "entry", "date", "time")
VALUES ('Prime', 'Ammount of time put into class and homework', '06/18/2018', '1,000,000'),
('Madden 17', 'Ammount of time spent playing Madden 17 on Xbox One', '08/01/2017', '600'),
('Patio Work', 'Need to create cedar platform for new water feature', '07/01/2018', '1'); -->

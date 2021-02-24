-- Creating Tables
DROP TABLE IF EXISTS players;
CREATE TABLE players
(
    id   serial not null
        constraint players_pk
            primary key,
    name text
);

DROP TABLE IF EXISTS scores;
CREATE TABLE scores
(
    id           serial not null
        constraint table_name_pk
            primary key,
    score        integer,
    player_id    integer
        constraint table_name_players_id_fk
            references players,
    date_created timestamp
);

-- Insert data
INSERT INTO players(id, name) VALUES (1, 'John');
INSERT INTO scores(score, player_id, date_created) VALUES (111, 1, current_timestamp);
INSERT INTO scores(score, player_id, date_created) VALUES (122, 1, current_timestamp);
INSERT INTO scores(score, player_id, date_created) VALUES (133, 1, current_timestamp);

INSERT INTO players(id, name) VALUES (2, 'Jane');
INSERT INTO scores(score, player_id, date_created) VALUES (211, 2, current_timestamp);
INSERT INTO scores(score, player_id, date_created) VALUES (222, 2, current_timestamp);
INSERT INTO scores(score, player_id, date_created) VALUES (233, 2, current_timestamp);


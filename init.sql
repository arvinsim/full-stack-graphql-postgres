SELECT DATABASE "postgres"

# Creating Tables
CREATE TABLE players
(
    id   serial not null
        constraint players_pk
            primary key,
    name text
);

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

#

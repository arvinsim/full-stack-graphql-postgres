CREATE DATABASE my_database;
CREATE USER this_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE "my_database" to this_user;
\i create_tables.sql

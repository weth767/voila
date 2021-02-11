#!/bin/bash
set -e

# creating voila database

psql <<- 'EOSQL'
CREATE DATABASE voila;
EOSQL

# Criando usuário e schema para a aplicação

psql --dbname="voila" <<- 'EOSQL'
CREATE USER local_user WITH PASSWORD 'admin';
CREATE SCHEMA IF NOT EXISTS voila AUTHORIZATION local_user;
ALTER USER local_user set search_path to voila, public;
EOSQL

# Importando o SQL de criação das tabelas 

psql -d voila -a -f /docker-entrypoint-initdb.d/init_db/voilascript.sql

# Garantindo privilégios às tabelas para o usuário "local_user"

psql --dbname="voila" <<- 'EOSQL'
GRANT ALL PRIVILEGES ON DATABASE voila TO local_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA voila TO local_user;
EOSQL

FROM postgres:latest

# env variables
ENV LANG='en_US.UTF-8' \
    LANGUAGE='en_US:pt' \
    TZ='America/Sao_Paulo'\
    POSTGRES_USER='admin'
    POSTGRES_PASSWORD='admin'

RUN \
    apk update &&\
	apk --no-cache add tzdata &&\
    cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Criando Docker Entry Point se necessário

RUN mkdir -p /docker-entrypoint-initdb.d/init_db
RUN echo "host al all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf

# Adicionando Script de Inicialização do banco dentro do Container

ADD voila_init.sh /docker-entrypoint-initdb.d/
ADD voilascript.sql /docker-entrypoint-initdb.d/init_db/
RUN chmod +x /docker-entrypoint-initdb.d/voila_init.sh

EXPOSE 5432
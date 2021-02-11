SET SCHEMA 'voila';

CREATE TABLE account (
    email varchar(150) not null ,
    username varchar(80) not null ,
    password varchar(50) not null ,
    account_type smallint not null ,
    constraint account_pk primary key (email),
    constraint account_username_un unique (username)
);

comment on table account is 'Tabela que armazena os dados das contas';
comment on column account.email is 'Identificador único da tabela e também armazena o email da conta';
comment on column account.username is 'Armazena o username do usuário';
comment on column account.password is 'Armazena a senha do usuário';

create table person (
	id bigserial not null ,
	name varchar(120) not null ,
	phone varchar(12) not null ,
	image bytea ,
    type smallint not null ,
	account_id varchar(150) not null ,
	constraint person_pk primary key (id) ,
	constraint person_account_fk foreign key (account_id) references account(email) on delete cascade
);

comment on table person is 'Tabela que armazena os dados das pessoas';
comment on column person.id is 'Identificador único da tabela';
comment on column person.name is 'Armazena o nome da pessoa';
comment on column person.phone is 'Armazena a telefone da pessoa';
comment on column person.image is 'Armazena a imagem da pessoa';
comment on column person.type is 'Armazena o tipo de pessoa';
comment on column person.account_id is 'Armazena a chave estrangeira da conta na pessoa';

create table person_natural (
    person_id bigint not null ,
    cpf char(11) not null ,
    birthday date ,
    gender smallint ,
    constraint person_natural_pk primary key (person_id),
    constraint person_natural_person_fk foreign key (person_id) references person(id) on delete cascade
);

comment on table person_natural is 'Tabela que armazena os dados das pessoas físicas';
comment on column person_natural.person_id is 'Identificador único da tabela e referência';
comment on column person_natural.cpf is 'Armazena o cpf da pessoa física';
comment on column person_natural.birthday is 'Armazena a data de aniversário da pessoa física';
comment on column person_natural.gender is 'Armazena o gênero da pessoa física';

create table person_legal (
  person_id bigint not null ,
  cnpj char(14) not null ,
  constraint person_legal_pk primary key (person_id),
  constraint person_legal_person_fk foreign key (person_id) references person(id) on delete cascade
);

comment on table person_legal is 'Tabela que armazena os dados das pessoas júridicas';
comment on column person_legal.person_id is 'Identificador único da tabela e referência';
comment on column person_legal.cnpj is 'Armazena o cnpj da pessoa júridica';
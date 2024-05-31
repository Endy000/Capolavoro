CREATE TABLE Calciatori(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(70), --nome completo o nick del calciatore
    descr VARCHAR(500), --descrizione del calciatore 
    foto VARCHAR(250), --link immagine
    bio TEXT,--biografia del calciatore
    car VARCHAR(250), --caratteristiche fisiche
    bag VARCHAR(250), --bagaglio tecnico
    ab VARCHAR(250), --altre abilità
    punteggio INT --punteggio calciatore
);

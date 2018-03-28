import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DbAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const DATABASE_SCHEMA = [
  `
    CREATE TABLE IF NOT EXISTS operadoras
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name VARCHAR(255)
    )
  `,
    `
    CREATE TABLE IF NOT EXISTS contatos
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        operadora_id INTEGER NOT NULL
    )
  `
];

const OPERADORAS_DATA = [
    ['INSERT INTO operadoras(name) VALUES(?)', ['Claro']],
    ['INSERT INTO operadoras(name) VALUES(?)', ['Oi']],
    ['INSERT INTO operadoras(name) VALUES(?)', ['Vivo']],
    ['INSERT INTO operadoras(name) VALUES(?)', ['Tim']],
];

@Injectable()
export class DbAppProvider {

    constructor(private sqlite: SQLite) {
        //console.log('Hello DbAppProvider Provider');
    }

    createDatabase() {
        this.getSQLiteInstance()
            .then((db: SQLiteObject) => {
                db.sqlBatch(DATABASE_SCHEMA)
                    .then(() => {
                        return db.sqlBatch(OPERADORAS_DATA)
                    })
                    .then(() => console.log('Tabelas e dados criados'))
                    .catch((error) => console.log(error))
            }) //ES6
            .catch((error) => console.log(error))
    }

    getSQLiteInstance(){
        return this.sqlite.create({
            name: 'app.db',
            location: 'default'
        });
    }

}

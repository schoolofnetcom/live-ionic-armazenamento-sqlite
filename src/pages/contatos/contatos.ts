import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DbAppProvider} from "../../providers/db-app/db-app";
import {SQLiteObject} from "@ionic-native/sqlite";

/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-contatos',
    templateUrl: 'contatos.html',
})
export class ContatosPage {
    contatos = [];

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public dbApp: DbAppProvider) {

    }

    ionViewDidLoad() {
        this.dbApp.getSQLiteInstance()
            .then((db: SQLiteObject) => {
                //UPDATE contatos SET name = ? , telefone = ? WHERE id = ?
                db.executeSql('SELECT * FROM contatos', [])
                    .then((resultset) => {
                        for (let i = 0; i < resultset.rows.length; i++) {
                            let contato = resultset.rows.item(i); //{id: name:, telefone: email, operadora_id}
                            this.contatos.push(contato);
                        }
                    })
                    .catch((error) => console.log(error));
            })
    }

}

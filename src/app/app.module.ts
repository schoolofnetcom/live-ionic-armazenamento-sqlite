import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ContatosPage} from "../pages/contatos/contatos";
import { DbAppProvider } from '../providers/db-app/db-app';
import {SQLite} from "@ionic-native/sqlite";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        ContatosPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        ContatosPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DbAppProvider,
        SQLite
    ]
})
export class AppModule {
}

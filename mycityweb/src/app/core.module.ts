import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    AngularFireModule,
    AuthMethods,
    AuthProviders
} from "angularfire2";
const firebaseConfig = {
    apiKey: "FIRE_BASE_API_KEY",
    authDomain: "FIRE_BASE_AUTH_DOMAIN",
    databaseURL: "FIRE_BASE_DATABASE_URL",
    storageBucket: "FIRE_BASE_STORAGE_BUCKET"
};
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, {
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        })
    ],
    exports: [
        BrowserModule,
    ]
})
export class CoreModule { }
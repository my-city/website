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
    apiKey: "AIzaSyBVaBPQk0ndKtWNoRo8Sq_LD8_6oKr9czI",
    authDomain: "mycity-25913.firebaseapp.com",
    databaseURL: "https://mycity-25913.firebaseio.com",
    storageBucket: "mycity-25913.appspot.com"
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
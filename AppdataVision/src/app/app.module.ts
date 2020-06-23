    //Import browsermodule
    import { BrowserModule } from '@angular/platform-browser';
    //Import core
    import { NgModule } from '@angular/core';
    //Import forms
    import {FormsModule} from '@angular/forms';
    //Import firebase
    import {AngularFireModule} from 'angularfire2';
    import {AngularFireDatabaseModule} from 'angularfire2/database';
    //Import App component
    import { AppComponent } from './app.component';
    //Import environment
    import {environment} from '../environments/environment';
import { AppsListComponent } from './items/apps-list/apps-list.component';
import { AppDetailComponent } from './items/app-detail/app-detail.component';
import { AppFormComponent } from './items/app-form/app-form.component';
    @NgModule({
      declarations: [
        AppComponent,
        AppsListComponent,
        AppDetailComponent,
        AppFormComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.config), //Initialize firebase
        AngularFireDatabaseModule, // for database
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
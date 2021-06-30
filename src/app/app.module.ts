import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(
     {
        apiKey: "AIzaSyBoq7SG7SU_23gwL63aGJ2dUEEAb_gVzNg",
        authDomain: "oshop-e6093.firebaseapp.com",
        databaseURL: "https://oshop-e6093-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "oshop-e6093",
        storageBucket: "oshop-e6093.appspot.com",
        messagingSenderId: "456174137713",
        appId: "1:456174137713:web:766a28f531b2a7526186d0",
        measurementId: "G-N1MG81N5C6"
      }),
    AngularFireAuthModule,
    CustomFormsModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    SharedModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

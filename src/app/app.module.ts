import { AddContactPageModule } from './../pages/add-contact/add-contact.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { ChatPageModule } from './../pages/chat/chat.module';
import { ContactDetailsPageModule } from './../pages/contact-details/contact-details.module';
import { ContactPageModule } from './../pages/contact/contact.module';
import { LoginModalPageModule } from './../pages/login-modal/login-modal.module';
import { AppError } from './../common/appError';
import { LoginPageModule } from './../pages/login/login.module';
import { loginService } from './../service/newVote.service';
import { TournamentPageModule } from './../pages/tournament/tournament.module';
import { NewvotePageModule } from './../pages/newvote/newvote.module';
import { NewvotePage } from './../pages/newvote/newvote';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule }    from '@angular/http';
import { LoginPage } from "../pages/login/login";
import { LoginServiceProvider } from '../providers/login-service/login-service';

import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import { ChatProvider } from '../providers/chat/chat';
import { ContactDetailSerProvider } from '../providers/contact-detail-ser/contact-detail-ser';
import { SignupProvider } from '../providers/signup/signup';
import { AddContactProvider } from '../providers/add-contact/add-contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    HttpModule,
    TournamentPageModule,
    NewvotePageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    LoginPageModule,
    LoginModalPageModule,
    ContactPageModule,
    ContactDetailsPageModule,
    ChatPageModule,
    SignupPageModule,
    AddContactPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [loginService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: AppError},
    LoginServiceProvider,
    ContactServiceProvider,
    ChatProvider,
    ChatProvider,
    ContactDetailSerProvider,
    SignupProvider,
    AddContactProvider
  ]
})
export class AppModule {}

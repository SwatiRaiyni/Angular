import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {NgxEditorModule} from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
 
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthService } from './auth.service';
let config = {
  apiKey: "AIzaSyCOlWjUKVLdq00xR04YvVhgbDroDpVvCPQ",
  authDomain: "scribe-c2198.firebaseapp.com",
  projectId: "scribe-c2198",
  storageBucket: "scribe-c2198.appspot.com",
  messagingSenderId: "1073650719959",
  appId: "1:1073650719959:web:5541e9e68d31d23fd9e492",
  measurementId: "G-MXP7PLEMDK"
};

firebase.initializeApp(config);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    AngularEditorModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

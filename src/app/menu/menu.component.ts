import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  LoggedIn:boolean=false;
  user:any;
  id:any;
  uid:any

  constructor() {
    this.user = firebase.auth().currentUser;
    //this.uid=firebase.auth().currentUser?.uid;
    if(this.user){
      this.LoggedIn = true;
    }
    else{
      this.LoggedIn = false;
    }
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user=user;
        this.LoggedIn = true;
      }
      else{
        this.LoggedIn = false;
      }
    })
   }

  ngOnInit(): void {
  }
  logout(){
    firebase.auth().signOut();
  }

}

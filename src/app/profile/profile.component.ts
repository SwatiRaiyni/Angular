
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  posts: any[] = [];
  constructor(public activatedRoute: ActivatedRoute) { 
    let id= this.activatedRoute.snapshot.paramMap.get("id");
    this.getProfile();
    this.getUsersPosts();
  }

  ngOnInit() {
  }

 
  getProfile(){

   let userId = firebase.auth().currentUser?.uid;
    firebase.firestore().collection("users").doc(userId).get().then((documentSnapshot) => {
       this.user = documentSnapshot.data();
       this.user.displayName = this.user.firstName + " " + this.user.lastName;
       this.user.id = documentSnapshot.id;
       this.user.hobbies = this.user.hobbies.split(",");
     //  console.log(this.user);
  
       console.log(this.user);
  
     }).catch((error) => {
       console.log(error);
     })

   
  }

  getUsersPosts(){
    let userId = firebase.auth().currentUser?.uid;

    firebase.firestore().collection("posts")
    .where("owner","==", userId).get().then((data)=>{
      
      this.posts = data.docs;

    })
  

  }
}
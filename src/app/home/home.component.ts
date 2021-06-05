import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = 'Internshala';
 // amount:number = 19999.233;
  //dateOfBirth = new Date();
  
  S:any;
  RateOfInterest:any;
  PrincipleAmount:any;
  Amount:any;
  time:any;
  

  

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
     this.S=(this.PrincipleAmount * this.RateOfInterest * this.time)/(100);
     this.Amount=this.S + this.PrincipleAmount;
    
  }
}

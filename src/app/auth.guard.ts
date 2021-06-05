import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
//import { rejects } from 'node:assert';
//import { resolve } from 'node:path';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return new Promise((resolve,rejects)=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          resolve(true);
        }else{
          this.router.navigate(['/login']);
          resolve(false);
        }
      })

    });
  }
  
}

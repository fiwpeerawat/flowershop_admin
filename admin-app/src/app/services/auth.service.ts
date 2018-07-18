import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
  }
)
export class AuthService {

  authState: any = null;
  userRef: AngularFireObject<any>;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth      
     })
    }

    get authenticated(): boolean {
      return this.authState != null;
    }

    emailLogin(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.authState = user     
          this.router.navigate(['/'])
        })
        .catch(error => console.log(error));
    }

    signOut(): void {
      this.afAuth.auth.signOut();
      this.router.navigate(['/Login'])
    }
}

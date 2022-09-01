import { signIn, createUser } from './../firebase/auth.firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean = false

  isLoading:boolean = false

  constructor(private router: Router) { }

  signIn(email: string, password: string) : void {
    if(this.isLoading || this.isAuthenticated) return
    this.isLoading = true
    signIn(email, password).then((res: any) => {
      if(res) {
        this.isAuthenticated = true
        this.router.navigate(['/'])
      }
    })
    .finally(()  => this.isLoading = false )
  }

  register(email: string, password: string) : void{
    if(this.isLoading || this.isAuthenticated) return

    this.isLoading = true
    
    createUser(email, password).then((res: any) => {
      if(res) {
        this.isAuthenticated = true
        this.router.navigate(['/'])
      }
    })
    .finally(() => this.isLoading = false)
  }

}

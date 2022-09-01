import { signIn, createUser } from './../firebase/auth.firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean = false

  isLoading:boolean = false

  constructor() { }

  signIn(email: string, password: string) : void {
    if(this.isLoading || this.isAuthenticated) return
    this.isLoading = true
    signIn(email, password).then((res: any) => {
      if(res) this.isAuthenticated = true
    })
    .finally(()  => this.isLoading = false )
  }

  register(email: string, password: string) : void{
    if(this.isLoading || this.isAuthenticated) return

    this.isLoading = true
    
    createUser(email, password).then((res: any) => {
      if(res) this.isAuthenticated = true
    })
    .finally(() => this.isLoading = false)
  }

}

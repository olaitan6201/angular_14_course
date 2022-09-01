import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUser } from 'src/app/firebase/auth.firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
    password_confirmation: new FormControl(null, Validators.required)
  })

  isLoading: boolean = false
  
  constructor() { }
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    const { email, password, password_confirmation } = this.registerForm.value 
    if(password !== password_confirmation) return alert('Password confirmation field incorrect');
    this.isLoading = true
    
    createUser(email, password).then((res: any) => {
      if(res) console.log(res);
    })
    .finally(() => this.isLoading = false)
  }

  fieldStatusText(field: any): string{
    if(field.errors){
      const { errors } = field
      if(errors.required) return "This field is required"
      return "The input value is invalid"
    }
    return ""
  }

}

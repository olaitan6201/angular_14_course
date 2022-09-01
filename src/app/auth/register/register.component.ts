import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor() { }
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    console.log(this.registerForm);
    
    const { email, password, password_confirmation } = this.registerForm.value 
    if(password !== password_confirmation) return alert('Password confirmation field incorrect');

    //do something
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

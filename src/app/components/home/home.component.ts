import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userForm: FormGroup | any;


  constructor(private formBuilder: FormBuilder ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
    });
    console.log("Hello")
  }

  onSubmit() {
    console.log(this.userForm.value);
   
  }
} 

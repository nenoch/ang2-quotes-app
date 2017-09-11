import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // reactive form (data-driven)
  signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const user = new User(this.signupForm.value.email,this.signupForm.value.password, this.signupForm.value.username);
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.signupForm.reset();
  }

}

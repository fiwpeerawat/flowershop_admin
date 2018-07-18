import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms'

declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userForm: FormGroup;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    $('.my-container').css('min-height', $(window).innerHeight() - 52);
    $('.my-container').css('padding-top', ($('.my-container').height() / 2) - 160);
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      Password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(25)
      ]),
    })
  }

  submit() {
    if (this.userForm.status == 'INVALID') return;
    this.auth.emailLogin(this.userForm.value.Email, this.userForm.value.Password);
  }

}

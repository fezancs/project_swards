import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    if (this.authService.isLoggedIn()) {
      console.log("redirected");
      this.router.navigateByUrl('/admindashboard');
    }
  }

  ngOnInit() {
    this.title = 'Administrator Login';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      admin_name: [''],
      admin_password: ['']
    })
  }

  onSubmit() {
    this.authService.login({
      admin_name: this.loginForm.get('admin_name').value,
      admin_password: this.loginForm.get('admin_password').value
    }).subscribe(
      result => {
        if (result) {
          this.messageService.clear();
          console.log("redirect 2");
          this.router.navigateByUrl('/admindashboard');
        }
      }
    )
  }

}

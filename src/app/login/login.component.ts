import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({});
 
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.loginForm = this._formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }
  onLogin(){
    var login:string[]= this.loginForm.value();
    console.log(login);
  }

}

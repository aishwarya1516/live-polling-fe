import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public adminForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.adminForm = this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  get errorControl() {
    return this.adminForm.controls;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  login() {
    const data = this.adminForm.getRawValue();
    if(data.name === 'admin' && data.password === 'password'){
      this.router.navigate(['dashboard']);
    }
  }

}

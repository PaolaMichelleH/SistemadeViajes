import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  public submitFormulario(){
    console.log(this.myForm);
    if(this.myForm.invalid){
      return;
    }
    console.log(this.myForm.value);
  }

    public get f():any{
      return this.myForm.controls;
    }
    }



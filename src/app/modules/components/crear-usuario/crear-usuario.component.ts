import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {


  formUser: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formControl();
  }


  formControl(){

    this.formUser = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [ Validators.email, Validators.required]),
      usuario: new FormControl('', [ Validators.maxLength(20), Validators.required,Validators.pattern('/^[a-z,A-Z]/')]),
      estado: new FormControl('', [ Validators.required]),
    });

  }

  get error(): any { return this.formUser.controls; }

  guardar(form: any){

  }


}

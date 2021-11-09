import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
httpOptions;
usuarios = [
  {id:1,usuario:'user_prueba',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:2,usuario:'user_prueba2',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:3,usuario:'user_prueba3',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:4,usuario:'user_prueba4',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:5,usuario:'user_prueba5',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:6,usuario:'user_prueba6',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:7,usuario:'user_prueba7',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:8,usuario:'user_prueba8',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:9,usuario:'user_prueba9',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:10,usuario:'user_prueba10',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:11,usuario:'user_prueba11',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:12,usuario:'user_prueba12',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:13,usuario:'user_prueba13',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:14,usuario:'user_prueba14',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:15,usuario:'user_prueba15',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
  {id:16,usuario:'user_prueba16',email:'correo@prueba.com',nombres:'Prueba',apellidos:'Tecnica',activo:'Activo'},
];
private _refresh$ = new Subject<void>();
  constructor(
    private http:HttpClient,
  ) {
    this.httpOptions = new HttpHeaders({
      'Content-type':'application/json',
    });
   }
   handleError(error: HttpErrorResponse): any{
    return throwError(error);
  }

  get refresh$(){
    return this._refresh$;
  }

  get(){
    return this.usuarios;
  }

  filtro(id){
    
  }

  save(data){
    
  }

  put(){

  }
  delete(){

  }

}

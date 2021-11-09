import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearUsuarioComponent } from '../components/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Filtros
  filtroEmail:string = '';
  filtroUsuario:string = '';
  filtroNombres:string = '';
  filtroApellidos:string = '';
  constructor(
    private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
  }

  filtro(){
    
  }

  crearUsuario(){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '60%',
      data: {
        type: 'crear',
        title: 'Crear usuario',
      },
      panelClass: 'custom-dialog-container',
    });

  }

}

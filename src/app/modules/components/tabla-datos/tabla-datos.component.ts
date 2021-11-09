import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaService } from 'src/app/services/prueba.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit,AfterViewInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator:MatPaginator;

  displayedColumns:string[] = ['usuario','email','nombres','apellidos','activo','acciones'];
  length;
  pageSize = 5;
  page = 1;
  pageSizeOptions = [5,10,25,50,100];
  
  //Filtros
  filtroEmail:string = '';
  filtroUsuario:string = '';
  filtroNombres:string = '';
  filtroApellidos:string = '';
  constructor(
    private dialog:MatDialog,
    private pruebaService:PruebaService,
  ) { 
    this.dataSource.data = pruebaService.get();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel="Registros por página";
  }

  detalleUsuario(id_user){

  }

  
  filtro(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  editar(dato: any){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '80%',
      data: {
        type: 'editar',
        title: 'Editar usuario',
        data: dato
      },
      panelClass: 'custom-dialog-container',
    });

  }

  ver(dato: any){

    const dialogCrearUsuario = this.dialog.open(CrearUsuarioComponent, {
      width: '80%',
      data: {
        type: 'ver',
        title: 'Ver usuario',
        data: dato
      },
      panelClass: 'custom-dialog-container',
    });

  }

}

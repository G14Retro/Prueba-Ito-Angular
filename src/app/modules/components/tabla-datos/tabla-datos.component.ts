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
  @Input() dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator:MatPaginator;

  displayedColumns:string[] = ['acciones','usuario','email','nombres','apellidos','activo'];
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

  pageEvent(event:any){
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
  }

  detalleUsuario(id_user){

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

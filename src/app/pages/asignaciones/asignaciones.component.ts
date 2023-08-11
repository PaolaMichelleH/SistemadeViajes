import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SistemaviajesService } from 'src/app/services/sistemaviajes.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent implements OnInit{
  listAsignaciones: any[]=[
    {id:'1', idColaborador:'9658',nombreColaborador:'Alexander Triminio', direccionColaborador:'Col. Las Vegas, 10 c alle',
      idSucursal:'1',direccionSucursal: 'Barrio El Benque, 5 calle, 6 ave S.O.',usuario:'admin'},
    {id:'2', idColaborador:'7592',nombreColaborador:'María Marcia', direccionColaborador:'Col. Las Mesetas',
      idSucursal:'2', direccionSucursal:'Col. Las Flores, 3 Ave N.E.',usuario:'admin'},
  ];

  public formAsignaciones!: FormGroup;

  constructor(private fb:FormBuilder,
    private _sistemaViajesService: SistemaviajesService){
    this.formAsignaciones=this.fb.group({
      id:['',Validators.required],
      idColaborador:['',Validators.required],
      nombreColaborador:['',Validators.required],
      direccionColaborador:['', Validators.required],
      idSucursal:['',Validators.required],
      direccionSucursal:['', Validators.required],
      usuario:['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    this.obtenerAsignaciones();
  }
  obtenerAsignaciones(){
    this._sistemaViajesService.getListAsignaciones().subscribe(data=>{
      console.log(data);
    }, error =>{
    console.log(error)
    })
  }

  guardarAsignacion(){
    console.log(this.formAsignaciones);

    const asignacion: any={
      id: this.formAsignaciones.get('id')?.value,
      idColaborador: this.formAsignaciones.get('idColaborador')?.value,
      nombreColaborador: this.formAsignaciones.get('nombreColaborador')?.value,
      direccionColaborador: this.formAsignaciones.get('direccionColaborador')?.value,
      idSucursal: this.formAsignaciones.get('idSucursal')?.value,
      direccionSucursal: this.formAsignaciones.get('direccionSucursal')?.value,
      usuario: this.formAsignaciones.get('usuario')?.value,
    }
    this.listAsignaciones.push(asignacion);
    this.formAsignaciones.reset();
  }
}


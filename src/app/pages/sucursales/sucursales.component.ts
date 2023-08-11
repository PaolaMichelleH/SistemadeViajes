import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SistemaviajesService } from 'src/app/services/sistemaviajes.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent implements OnInit {
  listSucursales: any[]=[
    {idSucursal:'1', nombreSucursal:'Super Simán', direccionSucursal:'Barrio El Benque, 5 calle, 6 ave S.O.'},
    {idSucursal:'2', nombreSucursal:'Simán Avenida Junior', direccionSucursal:'Col. Las Flores, 3 Ave N.E.'},
    {idSucursal:'3', nombreSucursal:'Simán Multiplaza', direccionSucursal:'Centro Comercial Multiplaza'},
    {idSucursal:'4', nombreSucursal:'Simán City Mall', direccionSucursal:'Col. Las Mesetas dentro de City Mall'},
    {idSucursal:'5', nombreSucursal:'Simán Galerías del Valle', direccionSucursal:'Col. Jardines del Valle,  Mall Galerías del Valle'},
    {idSucursal:'6', nombreSucursal:'Simán Plaza Moderna', direccionSucursal:'Ave. Circunvalación, 7 calle N.O.'},
    {idSucursal:'7', nombreSucursal:'Simán Villanueva', direccionSucursal:'Boulevard a Villanueva'},
    {idSucursal:'8', nombreSucursal:'Simán MegaMall', direccionSucursal:'Col. Las Flores, 3 Ave N.E.'},
    {idSucursal:'9', nombreSucursal:'Simán Los Andes', direccionSucursal:'B. Los Andes, 11-12 calle, 10 ave'},
    {idSucursal:'10', nombreSucursal:'Simán Las Palmas', direccionSucursal:'B. Las Palmas, 27 calle, 8 ave'},
  ];
  public formSucursal!: FormGroup;

  constructor(private fb:FormBuilder,
    private _sistemaViajesService: SistemaviajesService){
    this.formSucursal=this.fb.group({
      idSucursal:['',Validators.required],
      nombreSucursal:['',Validators.required],
      direccionSucursal:['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.obtenerSucursales();
  }

  obtenerSucursales(){
    this._sistemaViajesService.getListSucursales().subscribe(data=>{
      console.log(data);
    }, error =>{
    console.log(error)
    })
  }
}

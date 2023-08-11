import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SistemaviajesService } from 'src/app/services/sistemaviajes.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit{
  listColaboradores: any[]=[
    {id:'9658', nombre:'Alexander Triminio', direccion:'Col. Las Vegas', telefono:'98657578'},
    {id:'7592', nombre:'María Marcia', direccion:'Col. Las Mesetas', telefono:'88597168'},
  ];

  public formColaborador!: FormGroup;

  constructor(private fb:FormBuilder,
      private _sistemaViajesService: SistemaviajesService){
    this.formColaborador=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      direccion:['', Validators.required],
      telefono:['',[Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.obtenerColaboradores();

  }

  obtenerColaboradores(){
    this._sistemaViajesService.getListColaboradores().subscribe(data=>{
      console.log(data);
    }, error =>{
    console.log(error)
    })
  }

  guardarColaborador(){
    console.log(this.formColaborador);

    const colaborador: any={
      id: this.formColaborador.get('id')?.value,
      nombre: this.formColaborador.get('nombre')?.value,
      direccion: this.formColaborador.get('direccion')?.value,
      telefono: this.formColaborador.get('telefono')?.value,
    }
    this.listColaboradores.push(colaborador);
    this.formColaborador.reset();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SistemaviajesService {

  private myAppUrl = 'https://localhost:7172/';
  private myApiUrl='api/colaboradores/'
  private myApi2Url='api/sucursales/'
  private myApi3Url='api/asignaciones/'

  constructor(private http:HttpClient) { }
    getListColaboradores(): Observable<any>{
      return this.http.get(this.myAppUrl + this.myAppUrl)
    }

    getListSucursales(): Observable<any>{
      return this.http.get(this.myAppUrl + this.myApi2Url)
    }

    getListAsignaciones(): Observable<any>{
      return this.http.get(this.myAppUrl + this.myApi3Url)
    }
  }

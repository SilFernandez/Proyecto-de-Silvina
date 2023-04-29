import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor() { } /*private http:HttpClient... para hacer las peticiones que necesito*/
  obtenerDatos() {     /*   Observable <any>     metodo observable: los componentes que las consuman 
  puedan suscrbirse para la respuesta*/
    console.log('El servicio esta corriendo'); /* return this.http.get */
  }
}

import { Injectable } from '@angular/core';
import { Cerveza } from '../interfaces/cerveza.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CervezaService {
  cerveza: Cerveza[] = [];

  cervezas: Cerveza[] = []

  url = 'https://cervezas-80541.firebaseio.com/'
  constructor(private http: HttpClient) {

    this.getCervezas().subscribe(resp => {
      this.cervezas = resp;
    })
  }


  getCervezas() {
    return this.http.get(`${this.url}/cervezas.json`).pipe(map(
      (resp: any) => {
        return this.crearArray(resp)
      }))
  }

  crearArray(obj: Object) {
    let arrayCerv: Cerveza[] = [];
    let key;
    if (obj === null) {
      return [];
    }

    key = Object.keys(obj)
    key.forEach(k => {
      let cerveza = obj[k];
      cerveza.id = k;
      arrayCerv.push(cerveza)
    })

    return arrayCerv
  }

  crearCerveza(cerveza) {
    return this.http.post(`${this.url}/cervezas.json`, cerveza)
  }

  getCerveza(id) {
    return this.http.get(`${this.url}/cervezas/${id}.json`)
  }

  modificarCerveza(cerveza) {
    return this.http.put(`${this.url}/cervezas/${cerveza.id}.json`, cerveza)
  }


  eliminarCerveza(id) {
    return this.http.delete(`${this.url}/cervezas/${id}.json`)
  }

  buscarCerveza(term) {
    term = term.toLowerCase()
    let cervArr: Cerveza[] = [];


    for (let i = 0; i < this.cervezas.length; i++) {
      if (this.cervezas[i].nombre.toLowerCase().indexOf(term) >= 0) {
        cervArr.push(this.cervezas[i])
      }

    }
    console.log(cervArr, 'cervezasArr')
    return cervArr

  }
}





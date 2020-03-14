import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interfaces/cerveza.interface';
import { CervezaService } from 'src/app/services/cerveza.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
cervezas:Cerveza[]=[]
  constructor(private cS:CervezaService) { 

    this.cS.getCervezas().subscribe(resp=>{
      this.cervezas = resp;
    })

  }



  ngOnInit(): void {
  }
borrar(id,i){
  this.cervezas.splice(i,1)
  this.cS.eliminarCerveza(id);
}
}

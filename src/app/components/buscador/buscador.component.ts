import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interfaces/cerveza.interface';
import { CervezaService } from 'src/app/services/cerveza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
cervezas:Cerveza[]=[];
id:string;
  constructor(private cS:CervezaService, private aR:ActivatedRoute) { 

    this.aR.params.subscribe((resp:any)=>{
      this.id=resp.term;
     
      this.cervezas=this.cS.buscarCerveza(this.id);
    })
    
    
  }

  ngOnInit(): void {


  }

}

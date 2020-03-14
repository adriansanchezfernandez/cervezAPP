import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interfaces/cerveza.interface';
import { CervezaService } from 'src/app/services/cerveza.service';

@Component({
  selector: 'app-cervezas',
  templateUrl: './cervezas.component.html',
  styleUrls: ['./cervezas.component.css']
})
export class CervezasComponent implements OnInit {
cervezas:Cerveza[]=[];
graduadas:Cerveza[]=[];
  constructor(private cS:CervezaService) {

this.cS.getCervezas().subscribe((resp:any)=>{
  console.log(resp);
  this.cervezas = resp;

})

this.cS.getCervezas().subscribe((resp:any)=>{
  console.log(resp);
 

  this.graduadas= resp.sort((a,b)=>{return b.graduacion-a.graduacion});
  console.log(this.graduadas)
  this.graduadas = this.graduadas.splice(0, (this.graduadas.length -(this.graduadas.length-3)))
})




   }

  ngOnInit(): void {


  }

}

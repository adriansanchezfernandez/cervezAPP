import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CervezaService } from 'src/app/services/cerveza.service';
import { Cerveza } from 'src/app/interfaces/cerveza.interface';

@Component({
  selector: 'app-cerveza',
  templateUrl: './cerveza.component.html',
  styleUrls: ['./cerveza.component.css']
})
export class CervezaComponent implements OnInit {
cerveza:any=[];
id:any;
  constructor(private aR:ActivatedRoute, private cS:CervezaService) { 

  }



  ngOnInit(): void {


    
// let id = this.aR.snapshot.paramMap.get('id');
this.aR.params.subscribe(resp=>{
  this.id=resp.id;
  console.log(this.id)
})

this.cS.getCerveza(this.id).subscribe((resp:any)=>{
  this.cerveza = resp;
  console.log(this.cerveza);
 
})
  }

}

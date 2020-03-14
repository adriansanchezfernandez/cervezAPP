import { Component, OnInit } from '@angular/core';
import { Cerveza } from 'src/app/interfaces/cerveza.interface';
import { NgForm } from '@angular/forms';
import { CervezaService } from 'src/app/services/cerveza.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cerveza: Cerveza = {
    nombre: 'mahou',
    pais: 'epala',
    imagen: 'https://specials-images.forbesimg.com/imageserve/5e325c56f133f400076b17b9/960x0.jpg?fit=scale',
    graduacion: 5,
    tipo: 'TRIGO',
    descripcion: 'lorem ipsumdsafsd fdsg gfdgfdg',
  }



  constructor(private cS: CervezaService, private aR: ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.aR.snapshot.paramMap.get('id');

   console.log('id',id)
   if(id !=='nuevo'){
     
     this.cS.getCerveza(id).subscribe((resp:any)=> {

       this.cerveza=resp;
       this.cerveza.id = id;
      }
     
     )
    }
   }

  
  guardar(term: NgForm) {
    if(this.cerveza.id){

      console.log(term.value,'term value');
      console.log(this.cerveza)
      this.cS.modificarCerveza(this.cerveza).subscribe(resp=>{
        console.log('modificar')
                Swal.fire({
                  title: this.cerveza.nombre,
                  text: "Se actualizo correctamente",
                  icon: "success"
                });
        
        
              })



    }
    else
    {

      this.cS.crearCerveza(term.value).subscribe(resp => {
        console.log('crear')
        Swal.fire({
          title: this.cerveza.nombre,
          text: "Se actualizo correctamente",
          icon: "success"
        });
      })
      console.log(term.value)
   
    }

  
  }
}

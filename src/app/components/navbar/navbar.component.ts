import { Component, OnInit } from '@angular/core';
import { CervezaService } from 'src/app/services/cerveza.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
  }
buscar(term){
 if(term.length > 0){
this.router.navigate(['/buscador',term]);
 }
}
}

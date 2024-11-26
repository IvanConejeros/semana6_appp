import { Component, OnInit } from '@angular/core'; 
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'] 
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  
  productos = [ 
    {
      nombre: 'Plera Básica Blanca',
      precio: 10,
      imagen: '/assets/img/ROPA/ropa6.jpg'
    },
    {
      nombre: 'Polera rayada',
      precio: 15,
      imagen: '/assets/img/ROPA/ropa4.jpg'
    },
    {
      nombre: 'Polera colores',
      precio: 25,
      imagen: '/assets/img/ROPA/ropa7.jpg'
    },
    {
      nombre: 'Polera negra básica',
      precio: 10,
      imagen: '/assets/img/ROPA/ropa8.jpg'
    },
    
    {
      nombre: 'Polera varias',
      precio: 15.0,
      imagen: '/assets/img/ROPA/ropa9.jpg'
    },
   
  
  ];

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}

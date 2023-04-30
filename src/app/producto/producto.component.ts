import { Component,Input,Injector } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { AppComponent } from '../app.component';//comunicacion entre componentes
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto?: Producto;
  productos: Producto[] = [];
  puntero: number = 0;
  //comunicacion entre componentes
  constructor(
    
    //private route: ActivatedRoute,
    private productoService: ProductoService,
    private injector: Injector,//comunicacion entre componentes
    private appComponent: AppComponent,//comunicacion entre componentes
    
    //private location: Location
  ) {}
  ngOnInit(): void {
    

    
    // const p: Producto = {
    //   id: 1,
    //   description: 'Este es un producto de ejemplo',
    //   image: 'https://ejemplo.com/imagen.jpg',
    //   name: 'Producto de ejemplo',
    //   price: 19
    // };
    // this.productos.push(p)
    this.getProducto();
    this.getProducto();
    this.getProducto();
    this.getProducto();
    this.getProducto();
     this.puntero = 0;
  }
  getProducto(): void {
      this.productoService.getNextProducto()
       .subscribe(producto => this.productos.push(producto));
       this.puntero++;
  }
  likeProducto(): void {
    let liked = '';
   if(sessionStorage.getItem("usuario")!=null){
    this.productoService.likeProducto(this.productos[this.puntero].id).subscribe(response => {
      this.liked(JSON.parse(JSON.stringify(response)).like);
    }); 
    console.log("ya inicio sesion" + sessionStorage.getItem("usuario"));
   }else{
    this.appComponent.abrirDialog();  
   }
   console.log("liked: "+liked);
  }
  liked(opcion : String){
    if(opcion == "0"){
      
    }else if(opcion == "1"){
      
    }
  }
  
}

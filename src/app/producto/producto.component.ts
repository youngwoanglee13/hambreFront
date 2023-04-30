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
  showImage = true;
  center: google.maps.LatLngLiteral = {lat:-17.392418, lng:-66.162191};
  circleCenter: google.maps.LatLngLiteral = {lat:-17.392418, lng:-66.162191};
  radius = 80;
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
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
  ) {
  }
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
    // do something after suscription
      this.productoService.getNextProducto()
       .subscribe(producto => this.productos.push(producto)).
        add(() => {
          // this.center = {lat:this.productos[this.puntero].latitude, lng:this.productos[this.puntero].longitude};
          console.log("lat: "+this.productos[this.puntero].latitude);
          console.log("lng: "+this.productos[this.puntero].longitude);
          console.log("name: "+this.productos[this.puntero].name);
          // if markerPositions not empty, pop
          if (this.markerPositions.length > 0) {
            this.markerPositions.pop();
          }
          this.markerOptions = {
            draggable: false,
            label: {color: 'yellow', text: this.productos[this.puntero].restaurant},
          };
          this.markerPositions.push({lat:this.productos[this.puntero].latitude, lng:this.productos[this.puntero].longitude});
          // this.center.lat = this.productos[this.puntero].latitude;
          // this.center.lng = this.productos[this.puntero].longitude;
          // this.center
          // console.log("puntero: "+this.puntero);
          // this.position.lat = this.productos[this.puntero].latitude;
          // this.position.lng = this.productos[this.puntero].longitude;
          // this.label.text = this.productos[this.puntero].name;
        });
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
  toggleSection() {
    this.showImage = !this.showImage;
  }
  
}

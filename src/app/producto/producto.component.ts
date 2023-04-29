import { Component, Input } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto?: Producto;
  constructor(
    //private route: ActivatedRoute,
    private productoService: ProductoService,
    //private location: Location
  ) {}
  ngOnInit(): void {
    this.getProducto();
    //sessionStorage.setItem('clave', Math.floor(Math.random() * 1000000) + '');
  }
  getProducto(): void {
    
    //const id = Number(this.route.snapshot.paramMap.get('id'));
      this.productoService.getNextProducto()
       .subscribe(producto => this.producto = producto);
  }
}

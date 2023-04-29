import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { LocalComponent } from './local/local.component';

const routes: Routes = [
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
  { path: 'producto', component: ProductoComponent },
  { path: 'local', component: LocalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

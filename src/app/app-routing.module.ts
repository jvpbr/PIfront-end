import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path:"", redirectTo:"inicio", pathMatch:"full"},

  {path:"blog", component:BlogComponent},
  {path:"footer", component:FooterComponent},
  {path:"inicio", component:InicioComponent},
  {path:"menu", component:MenuComponent},
  {path:"produtos", component:ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

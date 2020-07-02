import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageLayoutComponent } from './components/menu-page-layout/menu-page-layout.component';
import { OlacompComponent } from './components/olacomp/olacomp.component';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';


const routes: Routes = [
  {
    path: '',
    component: MenuPageLayoutComponent,
    children: [
      {
        path: '',
        component: ImovelCardComponent,
      },
      {
        path: 'exemplo',
        component: OlacompComponent,
      }
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

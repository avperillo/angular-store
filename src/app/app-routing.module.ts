import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { PublicLayoutComponent } from './components/layouts/public-layout/public-layout.component';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

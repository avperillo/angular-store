import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductListItemComponent } from './components/products/product-list-item/product-list-item.component';

import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './components/core/home/home.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { PublicLayoutComponent } from './components/layouts/public-layout/public-layout.component';
registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    ProductListItemComponent,
    ProductListComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    PublicLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

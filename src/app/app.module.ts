import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, SecondComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

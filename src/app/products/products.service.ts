import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data: any[] = [
    { id: 1, name: 'Guitar', price: 1000 },
    { id: 2, name: 'Piano', price: 1500 },
    { id: 3, name: 'Drum', price: 5000 },
  ];
  constructor() {}
  getAllProducts() {
    return of(this.data);
  }
  getProductByID(id: number) {
    return of(this.data.find((p) => p.id === id));
  }
}

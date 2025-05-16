import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent implements OnInit {
  constructor(private store: ProductsService) {}
  products: any[] = [];
  ngOnInit(): void {
    this.store.getAllProducts().subscribe((pdts) => {
      this.products = pdts;
    });
  }
}

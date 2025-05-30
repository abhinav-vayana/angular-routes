import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent implements OnInit {
  product: any = [];
  constructor(private store: ProductsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      if (id) {
        this.store
          .getProductByID(parseInt(id, 10))
          .subscribe((product) => (this.product = product));
      }
    });
  }
}

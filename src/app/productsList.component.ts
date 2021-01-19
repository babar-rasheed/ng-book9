import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnInit
} from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "products-list",
  templateUrl: "./productsList.component.html",
  styles: []
})
export class ProductsListComponent {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
}

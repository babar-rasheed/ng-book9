import { Component, Input, HostBinding } from "@angular/core";
import { Product } from "./product.model";
/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: "product-department",
  templateUrl: "./productRow.component.html"
})
export class ProductDepartmentComponent {
  @Input() product: Product;
  @HostBinding("attr.class") cssClass = "item";
}

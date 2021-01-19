import { Component, Input, HostBinding } from "@angular/core";
import { Product } from "./product.model";
/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: "product-display",
  templateUrl: "./productDisplay.component.html"
})
export class ProductDisplayComponent {
  @Input() price: number;
}

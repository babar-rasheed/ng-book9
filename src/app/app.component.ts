import { Component, VERSION } from "@angular/core";
import { Product } from "./product.model";

@Component({
  selector: "inventory-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "https://picsum.photos/id/1050/150/150",
        ["Men", "Shoes", "Running Shoes"],
        109.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "https://picsum.photos/id/1051/150/150",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99
      ),
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "https://picsum.photos/id/1052/150/150",
        ["Men", "Accessories", "Hats"],
        29.99
      )
    ];
  }
  productWasSelected(product: Product): void {
    console.log("Product clicked: ", product);
  }
}

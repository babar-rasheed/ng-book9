import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductsListComponent } from "./productsList.component";
import { ProductRowComponent } from "./productRow.component";
import { ProductImageComponent } from "./productImage.component";
import { ProductDepartmentComponent } from "./productDepartment.component";
import { ProductDisplayComponent } from "./productDisplay.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

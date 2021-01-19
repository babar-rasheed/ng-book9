import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductsListComponent } from "./productsList.component";
import { ProductRowComponent } from "./productRow.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductsListComponent, ProductRowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

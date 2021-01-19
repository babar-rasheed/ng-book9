import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductsListComponent } from "./productsList.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProductsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

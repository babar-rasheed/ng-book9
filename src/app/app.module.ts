import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ArticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

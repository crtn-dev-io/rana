import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RaHeaderComponent } from "./components/rana-header/rana-header.component";
import { RanaHomeComponent } from "./pages/rana-home/rana-home.component";
import { RanaPresentationComponent } from "./components/rana-presentation/rana-presentation.component";
import { RanaComicComponent } from './components/rana-comic/rana-comic.component';
import { RanaNftsComponent } from './components/rana-nfts/rana-nfts.component';

@NgModule({
  declarations: [
    AppComponent,
    RaHeaderComponent,
    RanaHomeComponent,
    RanaPresentationComponent,
    RanaComicComponent,
    RanaNftsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

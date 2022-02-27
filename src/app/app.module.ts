import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RaHeaderComponent } from "./components/rana-header/rana-header.component";
import { RanaHomeComponent } from "./pages/rana-home/rana-home.component";
import { RanaPresentationComponent } from "./components/rana-presentation/rana-presentation.component";
import { RanaComicComponent } from "./components/rana-comic/rana-comic.component";
import { RanaNftsComponent } from "./components/rana-nfts/rana-nfts.component";
import { RanaProjectComponent } from "./components/rana-project/rana-project.component";
import { RanaCardComponent } from "./components/rana-card/rana-card.component";
import { RanaRoadmapComponent } from "./components/rana-roadmap/rana-roadmap.component";
import { RanaRoadmapCardComponent } from "./components/rana-roadmap-card/rana-roadmap-card.component";
import { RanaChipComponent } from "./components/rana-chip/rana-chip.component";
import { RanaTeamComponent } from "./components/rana-team/rana-team.component";
import { RanaMemberComponent } from "./components/rana-member/rana-member.component";
import { RanaFaqComponent } from "./components/rana-faq/rana-faq.component";
import { RanaFaqCardComponent } from "./components/rana-faq-card/rana-faq-card.component";
import { RanaBottomComponent } from "./components/rana-bottom/rana-bottom.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RanaLanguageComponent } from './components/rana-language/rana-language.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    RaHeaderComponent,
    RanaHomeComponent,
    RanaPresentationComponent,
    RanaComicComponent,
    RanaNftsComponent,
    RanaProjectComponent,
    RanaCardComponent,
    RanaRoadmapComponent,
    RanaRoadmapCardComponent,
    RanaChipComponent,
    RanaTeamComponent,
    RanaMemberComponent,
    RanaFaqComponent,
    RanaFaqCardComponent,
    RanaBottomComponent,
    RanaLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

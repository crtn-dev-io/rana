import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { RaHeaderComponent } from "./components/rana-header/rana-header.component";
import { RanaHomeComponent } from "./pages/rana-home/rana-home.component";
import { RanaPresentationComponent } from "./components/rana-presentation/rana-presentation.component";
import { RanaComicComponent } from './components/rana-comic/rana-comic.component';
import { RanaNftsComponent } from './components/rana-nfts/rana-nfts.component';
import { RanaProjectComponent } from './components/rana-project/rana-project.component';
import { RanaCardComponent } from './components/rana-card/rana-card.component';
import { RanaRoadmapComponent } from './components/rana-roadmap/rana-roadmap.component';
import { RanaRoadmapCardComponent } from './components/rana-roadmap-card/rana-roadmap-card.component';
import { RanaChipComponent } from './components/rana-chip/rana-chip.component';
import { RanaTeamComponent } from './components/rana-team/rana-team.component';
import { RanaMemberComponent } from './components/rana-member/rana-member.component';
import { RanaFaqComponent } from './components/rana-faq/rana-faq.component';
import { RanaFaqCardComponent } from './components/rana-faq-card/rana-faq-card.component';
import { RanaBottomComponent } from './components/rana-bottom/rana-bottom.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

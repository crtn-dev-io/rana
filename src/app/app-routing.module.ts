import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RanaHomeComponent } from "./pages/rana-home/rana-home.component";

const routes: Routes = [
  {
    path: "",
    component: RanaHomeComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

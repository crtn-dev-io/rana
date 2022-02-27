import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "rana-header",
  templateUrl: "./rana-header.component.html",
  styleUrls: ["./rana-header.component.scss"],
})
export class RaHeaderComponent implements OnInit {
  constructor(private _translate: TranslateService) {
    _translate.addLangs(["en", "fr"]);
  }

  ngOnInit(): void {}

  /**
   * Change language of the application
   * @param lang 
   */
  changeLanguage(lang: any | null): void {
    this._translate.setDefaultLang(lang.value);
  }
}

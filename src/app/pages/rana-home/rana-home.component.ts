import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "rana-home",
  templateUrl: "./rana-home.component.html",
  styleUrls: ["./rana-home.component.scss"],
})
export class RanaHomeComponent implements OnInit {
  /**
   * Handle the text and the associated image
   */
  nftMap: Map<string, string> = new Map<string, string>([
    ["NAISSANCE", "assets/img/RANA_BIRTH.gif"],
    ["COUCHE", "assets/img/RANA_DIAPER.gif"],
    ["NOURRITURE", "assets/img/RANA_EATING.gif"],
    ["AMUSEMENT", "assets/img/RANA_TOY.gif"],
    ["BAIN", "assets/img/BATH.png"],
  ]);

  /**
   * Set the nft image
   */
  nftImage: string = "assets/img/TOY.png";

  /**
   * Set the selected member
   */
  teamSelectedMember: string = "lumi";

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll() {
    const AMUSEMENT = document.getElementById(`nft__${0}`)?.offsetTop!;
    const BAIN = document.getElementById(`nft__${1}`)?.offsetTop!;
    const COUCHE = document.getElementById(`nft__${2}`)?.offsetTop!;
    const NAISSANCE = document.getElementById(`nft__${3}`)?.offsetTop!;
    const NOURRITURE = document.getElementById(`nft__${4}`)?.offsetTop!;
    const LUMI = document.getElementById("lumi")?.offsetTop!;
    const ALAIN = document.getElementById("alain")?.offsetTop!;

    let divider = window.screen.width < 600 ? 1 : 3;
    if (window.scrollY + window.screen.height / divider < LUMI) {
      this.teamSelectedMember = "lumi";
    } else {
      this.teamSelectedMember = "alain";
    }

    const map: Map<number, string> = new Map<number, string>([
      [AMUSEMENT, "AMUSEMENT"],
      [BAIN, "BAIN"],
      [COUCHE, "COUCHE"],
      [NAISSANCE, "NAISSANCE"],
      [NOURRITURE, "NOURRITURE"],
    ]);
    const array = [AMUSEMENT, BAIN, COUCHE, NAISSANCE, NOURRITURE];
    let nft = array.find((item, index) => {
      if (window.scrollY + window.screen.height / 2.1 < AMUSEMENT) return item;
      if (
        window.scrollY + window.screen.height / 2.1 > NOURRITURE &&
        index === array.length - 1
      ) {
        return item;
      }
      return (
        item! < window.scrollY + window.screen.height / 2.1 &&
        array[index + 1]! > window.scrollY + window.screen.height / 2.1
      );
    });
    this.nftImage = this.getNftImage(map.get(nft!)!) ?? this.nftImage;
  }

  constructor() {}

  ngOnInit(): void {}

  /**
   * Get the nft image based on text
   * @param text
   * @returns {string}
   */
  getNftImage(text: string): string {
    return this.nftMap.get(text)!;
  }
}

import { Component, HostListener, Input, OnInit } from "@angular/core";

const WAX_RANA_URL: string =
  "https://wax.atomichub.io/explorer/account/ranadventure" as const;

@Component({
  selector: "rana-nfts",
  templateUrl: "./rana-nfts.component.html",
  styleUrls: ["./rana-nfts.component.scss"],
})
export class RanaNftsComponent implements OnInit {
  /**
   * NFT Image
   */
  @Input()
  nftImage: string = "assets/img/TOY.png";

  /**
   * Handle the text and the associated image
   */
  nftMap: Map<string, string> = new Map<string, string>([
    ["COMPONENTS.NFTS.BIRTH", "assets/img/RANA_BIRTH.gif"],
    ["COMPONENTS.NFTS.DIAPER", "assets/img/RANA_DIAPER.gif"],
    ["COMPONENTS.NFTS.FOOD", "assets/img/RANA_EATING.gif"],
    ["COMPONENTS.NFTS.AMUSEMENT", "assets/img/RANA_TOY.gif"],
    ["COMPONENTS.NFTS.BATH", "assets/img/BATH.png"],
  ]);

  /**
   * List of nfts
   */
  nfts: string[] = [
    "COMPONENTS.NFTS.AMUSEMENT",
    "COMPONENTS.NFTS.BATH",
    "COMPONENTS.NFTS.DIAPER",
    "COMPONENTS.NFTS.BIRTH",
    "COMPONENTS.NFTS.FOOD",
  ];

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

  /**
   * Get active nft
   * @param key
   * @returns {boolean}
   */
  getActiveNft(key: string): boolean {
    return this.nftImage === this.getNftImage(key);
  }

  /**
   * When clicking on an nft label
   * @param text
   */
  onNftLabelClick(text: string) {
    this.nftImage = this.getNftImage(text);
  }

  /**
   * Redirect to wax url
   */
  redirectWax() {
    window.open(WAX_RANA_URL, "_blank");
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "rana-faq-card",
  templateUrl: "./rana-faq-card.component.html",
  styleUrls: ["./rana-faq-card.component.scss"],
})
export class RanaFaqCardComponent implements OnInit {
  /**
   * Title of the card
   */
  @Input()
  question!: Faq;

  /**
   * On display emit to hide the others
   */
  @Output()
  onDisplay: EventEmitter<Faq> = new EventEmitter<Faq>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * On content display
   */
  onContentDisplay() {
    this.question.isDisplayed = !this.question.isDisplayed;
    this.onDisplay.emit(this.question);
  }
}

export type Faq = {
  title: string;
  content: string;
  isDisplayed: boolean;
};

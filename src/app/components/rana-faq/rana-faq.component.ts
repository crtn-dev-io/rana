import { Component, OnInit } from "@angular/core";
import { Faq } from "../rana-faq-card/rana-faq-card.component";

@Component({
  selector: "rana-faq",
  templateUrl: "./rana-faq.component.html",
  styleUrls: ["./rana-faq.component.scss"],
})
export class RanaFaqComponent implements OnInit {
  /**
   * Array of questions
   */
  questions: Faq[] = [
    {
      title: "Quand se passe le premier giveaway ?",
      content:
        "Pour l'instant on attend Pour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attendPour l'instant on attend",
      isDisplayed: false,
    },
    {
      title: "Je ne connais pas Atomichub",
      content:
        "Pour l'instant on attend  l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend",
      isDisplayed: false,
    },
    {
      title: "Pourquoi s'appeler Rana ?",
      content:
        "Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend",
      isDisplayed: false,
    },
    {
      title: "Je n'ai pas vraiment compris le projet",
      content:
        "Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend l'instant on attend Pour l'instant on attend",
      isDisplayed: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  /**
   * When clicking on display, hide the others
   * @param ques 
   */
  hideOthers(ques: Faq) {
    this.questions.map((question: Faq) => {
      if (question.title !== ques.title) question.isDisplayed = false;
    });
  }
}

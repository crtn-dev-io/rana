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
      title: "COMPONENTS.FAQ.FIRST_QUESTION_TITLE",
      content: "COMPONENTS.FAQ.FIRST_QUESTION_CONTENT",
      isDisplayed: false,
    },
    {
      title: "COMPONENTS.FAQ.SECOND_QUESTION_TITLE",
      content: "COMPONENTS.FAQ.SECOND_QUESTION_CONTENT",
      isDisplayed: false,
    },
    {
      title: "COMPONENTS.FAQ.THIRD_QUESTION_TITLE",
      content: "COMPONENTS.FAQ.THIRD_QUESTION_CONTENT",
      isDisplayed: false,
    },
    {
      title: "COMPONENTS.FAQ.FOURTH_QUESTION_TITLE",
      content: "COMPONENTS.FAQ.FOURTH_QUESTION_CONTENT",
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

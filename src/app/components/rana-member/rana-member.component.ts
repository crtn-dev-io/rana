import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rana-member',
  templateUrl: "./rana-member.component.html",
  styleUrls: ["./rana-member.component.scss"],
})
export class RanaMemberComponent implements OnInit {

  /**
   * Name of the member
   */
  @Input()
  name!: string;

  /**
   * Description of the member
   */
  @Input()
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

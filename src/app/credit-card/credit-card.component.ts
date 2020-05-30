import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input() card_number: string;
  @Input() card_holder_name: string;
  @Input() expiration: string;

  constructor() { }

  ngOnInit(): void {
    this.card_number = this.card_number.match(/.{1,4}/g).join(' ').replace(/\d{4}(?= \d{4})/g, "****");
  }

}

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
  }

}

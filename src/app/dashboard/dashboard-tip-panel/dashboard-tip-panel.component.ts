import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-tip-panel',
  templateUrl: './dashboard-tip-panel.component.html',
  styleUrls: ['./dashboard-tip-panel.component.css']
})
export class DashboardTipPanelComponent implements OnInit {

  tip;

  constructor() { }

  ngOnInit(): void {
    this.tip = JSON.parse(localStorage.getItem('tip'));
  }

}

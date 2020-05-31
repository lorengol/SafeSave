import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as _ from "lodash";
import Chart from 'chart.js';

@Component({
  selector: 'dashboard-statistics-panel',
  templateUrl: './dashboard-statistics-panel.component.html',
  styleUrls: ['./dashboard-statistics-panel.component.css']
})
export class DashboardStatisticsPanelComponent implements OnInit {

  expenses;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const ctx = (document.getElementById('expensesChart') as HTMLCanvasElement).getContext('2d');

    this.dashboardService.getExpensesForUser(JSON.parse(localStorage.getItem('currentUser')).id)
      .subscribe(data => {
        this.expenses = data;

        this.createChart(ctx);
      });
  }

  private createChart(ctx) {
    const data = {
      datasets: [{
        data: this.expenses.map(expense => expense.expense),
        backgroundColor: ['#083D77', '#F94144', '#e5989b', '#F8961E', '#F9C74F', '#90BE6D', '#43AA8B', '#577590']
      }],
      labels: this.expenses.map(expense => expense.category)
    };
    const sumExpenses = this.expenses.map(expense => expense.expense).reduce((a, b) => parseInt(a) + parseInt(b), 0);
    const middleText = new Date().toLocaleString('default', { month: 'long' }) + ': ' + sumExpenses + '$';

    this.initChart();

    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        legend: {
          position: 'bottom'
        },
        elements: {
          center: {
            text: middleText
          }
        }
      }
    });
  }

  private initChart() {
    Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          var ctx = chart.chart.ctx;
    
          //Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Arial';
          var txt = centerConfig.text;
          var color = centerConfig.color || '#000';
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
          //Start with a base font of 30px
          ctx.font = "30px " + fontStyle;
    
          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
    
          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);
    
          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight);
    
          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse+"px " + fontStyle;
          ctx.fillStyle = color;
    
          //Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      }
    });
  }
}

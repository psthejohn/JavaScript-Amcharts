import { AmChartsService } from "amcharts3-angular2";

export class ChartOne {
  private chart: any;
  constructor(private AmCharts: AmChartsService) {}

  ngOnInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      type: "serial",
      dataProvider: [
        {
          year: 2005,
          income: 23.5
        },
        {
          year: 2006,
          income: 26.2
        },
        {
          year: 2007,
          income: 30.1
        }
      ],
      categoryField: "year",
      rotate: true,

      categoryAxis: {
        gridPosition: "start",
        axisColor: "#DADADA"
      },
      valueAxes: [
        {
          axisAlpha: 0.2
        }
      ],
      graphs: [
        {
          type: "column",
          title: "Income",
          valueField: "income",
          lineAlpha: 0,
          fillColors: "#ADD981",
          fillAlphas: 0.8,
          balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
        }
      ]
    });
  }
}

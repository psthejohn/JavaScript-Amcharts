import { Component } from "@angular/core";
import { AmChartsService } from "amcharts3-angular2";
import { DataSource } from "../models/dataSource";
import { ChartConfig1 } from "../models/chartConfig1";
import { ChartConfig2 } from "../models/chartConfig2";
import { ChartConfig3 } from "../models/chartConfig3";
import { ChartconfigService } from "../services/chartconfig.service";
import { ChartOne } from "../charts/chartOne";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent {
  private chart: any;

  ff = [
    {
      country: "USA",
      visits: 4252
    },
    {
      country: "China",
      visits: 1882
    },
    {
      country: "Japan",
      visits: 1809
    },
    {
      country: "Germany",
      visits: 1322
    },
    {
      country: "UK",
      visits: 1122
    },
    {
      country: "France",
      visits: 1114
    },
    {
      country: "India",
      visits: 984
    },
    {
      country: "Spain",
      visits: 711
    },
    {
      country: "Netherlands",
      visits: 665
    },
    {
      country: "Russia",
      visits: 580
    },
    {
      country: "South Korea",
      visits: 443
    },
    {
      country: "Canada",
      visits: 441
    },
    {
      country: "Brazil",
      visits: 395
    },
    {
      country: "Italy",
      visits: 386
    },
    {
      country: "Australia",
      visits: 384
    },
    {
      country: "Taiwan",
      visits: 338
    },
    {
      country: "Poland",
      visits: 328
    }
  ];

  dd: any = JSON.stringify(this.ff);

  chartData = [
    {
      country: JSON.parse(this.dd),
      visits: JSON.parse(this.dd)
    }
  ];

  size = JSON.parse(this.dd).length;
  data: any[] = this.chartData[0].country;
  constructor(
    private AmCharts: AmChartsService,
    private chartOne: ChartOne,
    private service: ChartconfigService // private datasource: DataSource
  ) {
    //console.log("Data From DATASOURCE FILE --- > ",this.datasource.chartData[0]);
  }

  ngOnInit() {
    this.chartOne;
  }

  private div: String = "chartdiv";
  // this.chartconfig1

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}

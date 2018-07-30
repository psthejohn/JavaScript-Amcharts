import { Injectable } from "@angular/core";
import { ChartConfig1 } from "../models/chartConfig1";
@Injectable()
export class ChartconfigService {
  constructor() {}

  getChartConfig1() {
    return ChartConfig1;
  }
}

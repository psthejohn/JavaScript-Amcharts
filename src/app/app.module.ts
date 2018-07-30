import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxCarouselModule } from "ngx-carousel";
import { AmChartsModule } from "amcharts3-angular2";

import { Routes, RouterModule } from "@angular/router";
import { routes } from "./routing/routing.module";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { ChartconfigService } from "./services/chartconfig.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    // AmChartsDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxCarouselModule,
    AmChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ChartconfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}

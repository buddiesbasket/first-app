import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { FillGraphComponent } from './components/fill-graph/fill-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { QuickTransferComponent } from './components/quick-transfer/quick-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { MycardsComponent } from './components/mycards/mycards.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DonutChartComponent,
     FillGraphComponent,
     TransactionsComponent,
     QuickTransferComponent,
     MycardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HighchartsChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

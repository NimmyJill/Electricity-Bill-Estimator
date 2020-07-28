import { Component, OnInit } from '@angular/core';
import { ConsumerDetailsModel } from '../user-setup/consumerDetails.model';
import { ConsumersService } from '../consumers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-estimate',
  templateUrl: './bill-estimate.component.html',
  styleUrls: ['./bill-estimate.component.css'],
})
export class BillEstimateComponent implements OnInit {
  consumerDetails = new ConsumerDetailsModel(
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  consumeRDetails = new ConsumerDetailsModel(
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  // estimations= <any>{currentUnitConsumption:number=0}
  lastMeterReading: number;
  lastMeterReadingDate: Date;
  currentMeterReading: number;
  currentUnitConsumption: number;
  currentEstimateAmount: number;
  averageDailyUsage;
  daysForNextBill;
  billForecasted: number;
  billForecastedWith1UnitReduced: number;
  billForecastedWith1UnitAdditional: number;

  constructor(private ConsumersService: ConsumersService) {}

  ngOnInit(): void {}

  calcMonthlyCharge(monthlyUsage, connectionType): any {
    let monthlyUsageCharge;
    let monthlyFixedCharge;
    let unitsAbove200;
    let unitsAbove150;
    let unitsAbove100;
    let unitsAbove50;
    let unitsAbove0;

    if (monthlyUsage > 500) {
      monthlyUsageCharge = monthlyUsage * 7.9;
      monthlyFixedCharge = 150;
    } else if (monthlyUsage > 400) {
      monthlyUsageCharge = monthlyUsage * 7.1;
      monthlyFixedCharge = 130;
    } else if (monthlyUsage > 350) {
      monthlyUsageCharge = monthlyUsage * 6.9;
      monthlyFixedCharge = 120;
    } else if (monthlyUsage > 300) {
      monthlyUsageCharge = monthlyUsage * 6.6;
      monthlyFixedCharge = 110;
    } else if (monthlyUsage > 250) {
      monthlyUsageCharge = monthlyUsage * 5.8;
      if (connectionType == '1 Phase') {
        monthlyFixedCharge = 100;
      } else {
        monthlyFixedCharge = 110;
      }
    } else {
      unitsAbove200 = 0;
      unitsAbove150 = 0;
      unitsAbove100 = 0;
      unitsAbove50 = 0;
      unitsAbove0 = 0;
      if (monthlyUsage > 200) {
        unitsAbove200 = monthlyUsage % 200;
      }
      if (monthlyUsage > 150) {
        unitsAbove150 = (monthlyUsage - unitsAbove200) % 150;
      }
      if (monthlyUsage > 100) {
        unitsAbove100 = (monthlyUsage - unitsAbove200 - unitsAbove150) % 100;
      }
      if (monthlyUsage - unitsAbove200 - unitsAbove150 - unitsAbove100 == 100) {
        unitsAbove50 = 50;
      } else if (monthlyUsage > 50) {
        unitsAbove50 =
          (monthlyUsage - unitsAbove200 - unitsAbove150 - unitsAbove100) % 50;
      }
      unitsAbove0 =
        monthlyUsage -
        unitsAbove200 -
        unitsAbove150 -
        unitsAbove100 -
        unitsAbove50;

      monthlyUsageCharge =
        unitsAbove200 * 7.6 +
        unitsAbove150 * 6.4 +
        unitsAbove100 * 4.8 +
        unitsAbove50 * 3.7 +
        unitsAbove0 * 3.15;
      if (unitsAbove200 != 0) {
        if (connectionType == '1 Phase') {
          monthlyFixedCharge = 80;
        } else {
          monthlyFixedCharge = 100;
        }
      } else if (unitsAbove150 != 0) {
        if (connectionType == '1 Phase') {
          monthlyFixedCharge = 75;
        } else {
          monthlyFixedCharge = 100;
        }
      } else if (unitsAbove100 != 0) {
        if (connectionType == '1 Phase') {
          monthlyFixedCharge = 55;
        } else {
          monthlyFixedCharge = 100;
        }
      } else if (unitsAbove50 != 0) {
        if (connectionType == '1 Phase') {
          monthlyFixedCharge = 45;
        } else {
          monthlyFixedCharge = 90;
        }
      } else if (unitsAbove0 != 0) {
        if (connectionType == '1 Phase') {
          monthlyFixedCharge = 35;
        } else {
          monthlyFixedCharge = 90;
        }
      } else {
        monthlyFixedCharge = 0;
      }
    }

    return { monthlyUsageCharge, monthlyFixedCharge };
  }

  calculateBill(usedUnits, usageDays, connectionType): any {
    let dailyUsage;
    let monthlyUsage;
    let monthlyOneUnitUnderUsage;
    let monthlyOneUnitOverUsage;
    let calcMonthlyCharge;
    let monthlyMeterRent;
    let currentUsageBill;
    let forecastedBillPerCurrentUsage;
    let forecastedBillPerUnderUsage;
    let forecastedBillPerOverUsage;

    dailyUsage = usedUnits / usageDays;
    monthlyUsage = dailyUsage * 30;
    monthlyOneUnitUnderUsage =
      (usedUnits + (dailyUsage - 1) * (60 - usageDays)) / 2;
    if (monthlyOneUnitUnderUsage < 0) {
      monthlyOneUnitUnderUsage = 0;
    }
    monthlyOneUnitOverUsage =
      (usedUnits + (dailyUsage + 1) * (60 - usageDays)) / 2;

    let monthlyCharge = this.calcMonthlyCharge(monthlyUsage, connectionType);
    let monthlyUnderUsageCharge = this.calcMonthlyCharge(
      monthlyOneUnitUnderUsage,
      connectionType
    );
    let monthlyOverUsageCharge = this.calcMonthlyCharge(
      monthlyOneUnitOverUsage,
      connectionType
    );
    // let monthlyCharge =100;
    // let monthlyUnderUsageCharge = 100;
    // let monthlyOverUsageCharge = 100;

    if (connectionType == '1 Phase') {
      monthlyMeterRent = 12;
    } else {
      monthlyMeterRent = 30;
    }

    // Usage charge is multiplied by 1.1 to include 10% Duty charges
    currentUsageBill =
      (monthlyCharge.monthlyUsageCharge * usageDays * 1.1) / 30 +
      monthlyCharge.monthlyFixedCharge * 2 +
      monthlyMeterRent;
    forecastedBillPerCurrentUsage =
      (monthlyCharge.monthlyUsageCharge * 1.1 +
        monthlyCharge.monthlyFixedCharge) *
        2 +
      monthlyMeterRent;
    forecastedBillPerUnderUsage =
      (monthlyUnderUsageCharge.monthlyUsageCharge * 1.1 +
        monthlyUnderUsageCharge.monthlyFixedCharge) *
        2 +
      monthlyMeterRent;
    forecastedBillPerOverUsage =
      (monthlyOverUsageCharge.monthlyUsageCharge * 1.1 +
        monthlyOverUsageCharge.monthlyFixedCharge) *
        2 +
      monthlyMeterRent;

    return {
      currentUsageBill,
      forecastedBillPerCurrentUsage,
      forecastedBillPerUnderUsage,
      forecastedBillPerOverUsage,
    };
  }

  result() {
    if (document.getElementById('currentMeterReading')['value'] == '') {
      alert('Please enter your current meter reading in kWH');
    } else {
      let lastMeterReading: number = this.consumerDetails['lastMeterReading'];
      let connectionType = this.consumerDetails['connectionType'];
      let currentMeterReading: number = document.getElementById(
        'currentMeterReading'
      )['value'];
      this.currentUnitConsumption = currentMeterReading - lastMeterReading;
      // this.currentEstimateAmount=currentMeterReading-lastMeterReading;
      // this.billForecasted=currentMeterReading-lastMeterReading;

      var today: Date = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var day = new Date(mm + '/' + dd + '/' + yyyy);
      console.log(day);
      // today = mm + '/' + dd + '/' + yyyy;

      let date1 = new Date(document.getElementById('myDate')['value']);

      var Difference_In_Time = day.getTime() - date1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.daysForNextBill = (60 - Difference_In_Days).toFixed(0);
      this.averageDailyUsage = (
        this.currentUnitConsumption / Difference_In_Days
      ).toFixed(2);

      let bill = this.calculateBill(
        this.currentUnitConsumption,
        Difference_In_Days,
        connectionType
      );
      this.currentEstimateAmount = bill.currentUsageBill.toFixed(2);
      this.billForecasted = bill.forecastedBillPerCurrentUsage.toFixed(2);
      this.billForecastedWith1UnitReduced = bill.forecastedBillPerUnderUsage.toFixed(
        2
      );
      this.billForecastedWith1UnitAdditional = bill.forecastedBillPerOverUsage.toFixed(
        2
      );
    }
  }

  fetchDetails() {
    this.ConsumersService.fetchDetail(this.consumeRDetails).subscribe(
      (res: any) => {
        if (res.Message == 'OK') {
          console.log('Valid Consumer!!');
          this.consumerDetails = res.consumer;
        } else {
          console.log('Invalid Details!!');
          alert('Invalid Consumer!!');
        }
      }
    );
  }
}

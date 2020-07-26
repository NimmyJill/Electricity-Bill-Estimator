import { Component, OnInit } from '@angular/core';
import {ConsumerDetailsModel} from '../user-setup/consumerDetails.model';
import {ConsumersService} from '../consumers.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-bill-estimate',
  templateUrl: './bill-estimate.component.html',
  styleUrls: ['./bill-estimate.component.css']
})
export class BillEstimateComponent implements OnInit {
  consumerDetails= new ConsumerDetailsModel(null,null,null,null,null,null,null);
  // estimations= <any>{currentUnitConsumption:number=0}
 lastMeterReading: number;
 lastMeterReadingDate: Date;
 currentMeterReading: number;
 currentUnitConsumption:number;
 currentEstimateAmount:number;
 averageDailyUsage:number;
 daysForNextBill:number;
 billForecasted:number;
 today:Date;

  constructor(private ConsumersService: ConsumersService ) { }

  ngOnInit(): void {
  }


result()
{
  if(document.getElementById('currentMeterReading')['value']==""){
    alert("Please enter your current meter reading in kWH")
  } else{
    let lastMeterReading:number= this.consumerDetails['lastMeterReading'];
    let currentMeterReading:number=document.getElementById('currentMeterReading')['value'];
    this.currentUnitConsumption=currentMeterReading-lastMeterReading;
    this.currentEstimateAmount=currentMeterReading-lastMeterReading;
    this.averageDailyUsage=this.currentEstimateAmount/Difference_In_Days;
    
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();
    // today = mm + '/' + dd + '/' + yyyy;

    let date1=new Date(document.getElementById('myDate')['value']);
    let date2=new Date(document.getElementById('currentDate')['value']);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
    var Difference_In_Days=Difference_In_Time / (1000 * 3600 * 24);
    this.daysForNextBill=60-Difference_In_Days;

    this.billForecasted=currentMeterReading-lastMeterReading;
  
    

  }
}
fetchDetails(){
  this.ConsumersService.fetchDetail(this.consumerDetails)
  .subscribe((res:any)=>{
    if(res.Message=="OK")
    {
      console.log("Valid Consumer!!");
     this.consumerDetails=res.consumer;
      
    }
    else
    {
        console.log("Invalid Details!!");
       alert("Invalid Consumer!!")
    }
  })
}
}

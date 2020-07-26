import { Component, OnInit } from '@angular/core';
import { ConsumersService } from '../consumers.service';
import { ConsumerDetailsModel } from '../user-setup/consumerDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  title:String = 'Add New Consumer';
  constructor(private ConsumersService: ConsumersService, private router: Router) { }
  consumer= new ConsumerDetailsModel(null,null,null,null,null,null,null);
  ngOnInit(){
  }
  AddConsumer()
  {
    this.ConsumersService.newConsumer(this.consumer);
    console.log(this.consumer);
    
    console.log("Called");
    alert("Success");
    this.router.navigate(['/admin']);
  }

}


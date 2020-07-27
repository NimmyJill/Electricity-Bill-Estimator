import { Component, OnInit, OnDestroy} from '@angular/core';
import { ConsumersService} from '../consumers.service';
import {ConsumerDetailsModel } from '../user-setup/consumerDetails.model';
import { Router, ActivatedRoute } from '@angular/router';
// import {from, Subscription} from 'rxjs';

@Component({
  selector: 'app-update-consumer',
  templateUrl: './update-consumer.component.html',
  styleUrls: ['./update-consumer.component.css']
})
export class UpdateConsumerComponent implements OnInit, OnDestroy {
  title:String = 'Update Consumer Details';
  consumers= new ConsumerDetailsModel(null,null,null,null,null,null,null);
  id;
  sub;
  constructor(public consumerService: ConsumersService, private router: Router, private activatedRoute:ActivatedRoute) { }
  updateConsumer()
  {
    console.log(this.consumers);    
    this.consumerService.updateConsumer(this.consumers);
    console.log("Consumer details Updated");
    alert("Updated a consumer's details!!");
    this.router.navigate(['/admin']);
  }
  ngOnInit(): void
  {
    this.sub=
    this.activatedRoute.paramMap.subscribe((params)=>
                                                {
                                                  this.id=params.get('id');
                                                  console.log("id"+ this.id);
                                              this.consumerService.singleConsumer(this.id).subscribe((data)=>
                                              {
                                                this.consumers=JSON.parse(JSON.stringify(data));
                                                console.log(this.consumers);
                                              });
                                              console.log(this.consumers);
                                                });
  }
  
  
  
  
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
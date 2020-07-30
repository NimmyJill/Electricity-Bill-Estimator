import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsumerDetailsModel } from './consumerDetails.model';
import { ConsumersService } from '../consumers.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrls: ['./user-setup.component.css'],
})
export class UserSetupComponent implements OnInit, OnDestroy {
  title: String = 'User-setup *Admin only';
  sub;
  //Product is the model class for a product item
  consumers = <any>[];

  //delete function
  deleteConsumer(id) {
    console.log('deleted' + id);
    this.ConsumersService.deleteConsumer(id);
    alert('Deleted a consumer');
    window.location.reload();
  }

  //creating service object for calling getProducts()
  constructor(
    private ConsumersService: ConsumersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub =
      //calling getProducts() and loading the products to products array
      this.ConsumersService.getConsumers().subscribe((data) => {
        this.consumers = JSON.parse(JSON.stringify(data));
        console.log(this.consumers);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {UserSetupComponent} from './user-setup/user-setup.component'
import {BillEstimateComponent} from './bill-estimate/bill-estimate.component'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {NewConsumerComponent} from './new-consumer/new-consumer.component'
import {UpdateConsumerComponent} from './update-consumer/update-consumer.component'
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin', component:UserSetupComponent},
  {path:'bill', component: BillEstimateComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'newConsumer', component:NewConsumerComponent},
  {path:'updateConsumer:/id', component:UpdateConsumerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

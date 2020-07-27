import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillEstimateComponent } from './bill-estimate/bill-estimate.component';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewConsumerComponent } from './new-consumer/new-consumer.component';
import { UpdateConsumerComponent } from './update-consumer/update-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillEstimateComponent,
    UserSetupComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NewConsumerComponent,
    UpdateConsumerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

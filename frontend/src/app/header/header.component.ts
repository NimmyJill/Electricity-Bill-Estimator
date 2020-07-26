import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
title: String ="Self-Service Electricity Bill Estimator";
  ngOnInit(): void {
  }
  // getUrl()
  // {
  //   return "url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.ewon.com.au%2Fcontent%2FImage%2FMaking%2520a%2520complaint%2FSmart-meter-700.jpg&imgrefurl=https%3A%2F%2Fwww.ewon.com.au%2Fpage%2Fmaking-a-complaint%2Fwhat-can-i-complain-about%2Fdigital-meters&tbnid=numVWh4CTURZ9M&vet=10CHYQMyg2ahcKEwiwuNSrmtvqAhUAAAAAHQAAAAAQCg..i&docid=VJcwaHDqAnkXbM&w=700&h=368&itg=1&q=energy%20meter%20reading%20taking&hl=en&ved=0CHYQMyg2ahcKEwiwuNSrmtvqAhUAAAAAHQAAAAAQCg.jpg')";
  // }
}

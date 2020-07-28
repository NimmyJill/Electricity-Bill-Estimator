import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor() {}
  title: String = 'About Us';
  ngOnInit(): void {}
}

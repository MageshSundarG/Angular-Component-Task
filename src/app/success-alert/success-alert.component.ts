import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success-alert',
  // templateUrl: './success-alert.component.html',
  template: '<p class="text-success">.text-success</p>',
  // styleUrls: ['./success-alert.component.css']
  styles: [`
  .text-success{
    color: darkgreen;
  }
  p{
    padding: 20px;
    border: 2px solid green;
    background-color: lightgreen;
  }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

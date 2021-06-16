import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()  childName:string = '';

  @Input()  cartNumber1:number = 0;
  constructor() { }

  

  ngOnInit(): void {
  }

}

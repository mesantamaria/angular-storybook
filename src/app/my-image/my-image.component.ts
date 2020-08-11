import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  @Input() url;
  @Input() alt;
  @Input() style;

  constructor() { }

  ngOnInit(): void {
  }

}

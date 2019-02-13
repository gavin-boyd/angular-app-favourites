import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private elementRef:ElementRef
  ){}

  ngOnInit() {
    var assetid = this.elementRef.nativeElement.getAttribute('id');
    //debug
    console.log(assetid);
  }
}

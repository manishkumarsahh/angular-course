import {
   Component, 
   Input, 
   OnChanges,
   SimpleChanges, 
   OnInit,
   ViewEncapsulation, 
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
   ViewChild,
   ElementRef,
   ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
 OnInit, 
 OnChanges,
 DoCheck, 
 AfterContentInit ,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanes called');
   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content:'  + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
      console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
      console.log("ngAfterContent init called");
      console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(){
      console.log("after content checked called")
  }

  ngAfterViewInit() {
    console.log('Text Content:'  + this.header.nativeElement.textContent);

    console.log("ngAfterContent init called");
  }

  ngAfterViewChecked(){
      console.log("after content checked called")
  }

  ngOnDestroy() {
      console.log("ngOnDestroy  called");
  }



}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aee-hello-world',
  template: `
  <div>
    Hello, I'm {{name}}. I'm custom element.
  </div>`
})
export class HelloWorldComponent implements OnInit {

  @Input() name: string;

  constructor() {}

  ngOnInit() {
  }

}

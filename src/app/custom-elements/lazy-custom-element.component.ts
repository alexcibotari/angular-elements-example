import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ElementsLoader } from './elements-loader';

@Component({
  selector: 'aee-lazy-ce',
  template: '',
})
export class LazyCustomElementComponent implements OnInit {
  @Input() selector = '';

  constructor(
    private elementRef: ElementRef,
    private elementsLoader: ElementsLoader,
  ) {}

  ngOnInit() {
    if (!this.selector || /[^\w-]/.test(this.selector)) {
      console.error(new Error(`Invalid selector for 'aio-lazy-ce': ${this.selector}`));
      return;
    }

    this.elementRef.nativeElement.innerHTML = `<${this.selector}></${this.selector}>`;
    this.elementsLoader.loadCustomElement(this.selector);
  }
}

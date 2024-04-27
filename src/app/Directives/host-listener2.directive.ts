import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHostListener2]'
})
export class HostListener2Directive {

  constructor() { }

  @Output() buttonClick = new EventEmitter<PointerEvent>();

  @HostListener('click', ['$event']) handleHostClick(event: PointerEvent){
    this.buttonClick.emit();
  }

}

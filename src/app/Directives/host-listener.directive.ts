import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor() { }

  @HostListener('click', ['$event']) handleHostClick(event: PointerEvent){
    event.preventDefault();
    alert('Button clicked!');
  }

}

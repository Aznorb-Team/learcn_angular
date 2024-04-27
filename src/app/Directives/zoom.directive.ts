import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  @Input('zoom') size: any;

  constructor(private el: ElementRef) {  }

  @HostListener('mouseenter') onMouseEnter() {
      this.setFontSize(this.size);
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.setFontSize(14);
  }

  setFontSize(size: number | string): void {
      this.el.nativeElement.style.fontSize = `${size}px`;
  }
}

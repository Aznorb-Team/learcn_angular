import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[duplicateContent]'
})
export class DublicateDirective {

  @Input() set duplicateContent(condition: boolean) {
      if (condition && !this.contentWasDuplicated) {
          this.vc.insert(this.tpl.createEmbeddedView(null));
          this.contentWasDuplicated = true;
      }
  }

  private contentWasDuplicated: boolean = false;

  constructor(
      private tpl: TemplateRef<any>,
      private vc: ViewContainerRef
  ) {}

}

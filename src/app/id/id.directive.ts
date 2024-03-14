import {
  Directive,
  ElementRef,
  inject,
  input,
  effect
} from '@angular/core';
import { ATTR_NAME } from './attr-name.token';

@Directive({
  standalone: true,
  selector: '[testId]'
})
export class IdDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly attrName = inject(ATTR_NAME);
  
  id = input.required<string>({ alias: 'testId' });

  constructor() {
    this.addTestAttribute();    
  }

  private addTestAttribute() {
    effect(() => {
      this.host.nativeElement.setAttribute(this.attrName, this.id());
    });
  }
}

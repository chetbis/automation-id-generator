import {
  Directive,
  ElementRef,
  inject,
  input,
  effect
} from '@angular/core';
import { ID_PREFIX } from './id-prefix.token';
import { ATTR_NAME } from './attr-name.token';
import { ID_GENERATOR } from './id-generator.token';

@Directive({
  standalone: true,
  selector: '[testId]'
})
export class IdDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly idPrefix = inject(ID_PREFIX);
  private readonly attrName = inject(ATTR_NAME);
  private readonly getId = inject(ID_GENERATOR);

  id = input.required<string>({ alias: 'testId' });

  constructor() {
    this.addTestAttribute();    
  }

  private addTestAttribute() {
    effect(() => {
      this.host.nativeElement.setAttribute(this.attrName, this.getId(this.idPrefix, this.id()));
    });
  }
}

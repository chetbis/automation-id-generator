import { Directive, ElementRef, inject, input, effect } from '@angular/core';
import { ATTR_NAME } from './attr-name.token';
import { INTERFACE_TOKEN } from './interface-token';

@Directive({
  standalone: true,
  selector: '[testId]',
})
export class IdDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly attrName = inject(ATTR_NAME);

  private readonly parentComponent = inject(INTERFACE_TOKEN, {
    skipSelf: true,
    optional: true,
  });

  id = input.required<string>({ alias: 'testId' });

  constructor() {
    this.addTestAttribute();
  }

  private addTestAttribute() {
    effect(() => {
      const parentSelector = this.getParentComponentSelector();

      this.host.nativeElement.setAttribute(
        this.attrName,
        `${parentSelector ? `${parentSelector}-` : ''}${this.id()}`
      );
    });
  }

  /**
   * Gets parent component's selector
   */
  private getParentComponentSelector() {
    return this.parentComponent?.getSelector() ?? '';
  }
}

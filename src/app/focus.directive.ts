import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[hzFocus]',
})
export class FocusInputElementDirective implements OnInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnInit() {
    this.element.nativeElement.focus();
  }
}

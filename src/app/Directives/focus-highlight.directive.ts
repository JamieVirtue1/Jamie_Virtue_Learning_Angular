import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFocusHighlight]',
  standalone: true
})
export class FocusHighlightDirective {

  @Input() focusColor: string = 'purple';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.applyHighlight(this.focusColor);
  }

  @HostListener('blur') onBlur() {
    this.removeHighlight();
  }

  private applyHighlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private removeHighlight() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}

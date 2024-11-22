import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @Input() textColor: string = 'gold';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resetColor();
  }

  private changeColor(txtColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', txtColor);
  }

  private resetColor() {
    this.renderer.removeStyle(this.el.nativeElement, 'color');
  }
}

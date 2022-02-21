import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputDirective]',
})
export class InputDirectiveDirective {
  @Input() appInputDirective = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appInputDirective || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

import {
  AfterViewInit,
  Directive,
  ElementRef,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective implements AfterViewInit {
  textColor = input<string>('#09c');
  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer2.addClass(this.el.nativeElement, 'text-center');

    this.renderer2.addClass(this.el.nativeElement, 'my-3');

    this.renderer2.setStyle(this.el.nativeElement, 'color', this.textColor());
  }
}

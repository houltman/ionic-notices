

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[defaultImage]'
})
export class DefaultImageDirective {

  constructor(private elementImg: ElementRef) { }

  @HostListener('error')

  loadError(): void {
    let element = this.elementImg.nativeElement;
    element.src = 'assets/bitcoin.webp';
  }

}

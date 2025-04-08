
// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHover]',
// })
// export class HoverDirective {
//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     this.el.nativeElement.style.backgroundColor = 'yellow';
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.el.nativeElement.style.backgroundColor = 'transparent';
//   }
// }





import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: false
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'skyblue';
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.style.backgroundColor = 'blue';
  // }
}
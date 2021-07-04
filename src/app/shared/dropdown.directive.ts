import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding("class.open") dropdown = false;
    @HostListener("document:click", ['$event']) openDropdown(event: Event) {
        this.dropdown = this.elRef.nativeElement.contains(event.target) ? !this.dropdown : false;
    }
    constructor(private elRef: ElementRef) {

    }
}
import { Directive, ElementRef, inject, input } from "@angular/core";


@Directive({
    selector:'a[appSafeLink]',
    standalone:true,
    host:{
        '(click)' : 'onConfirmLeavePage($event)'
    }
})

export class SafeLinkDirective {

    queryParams = input('myapp');
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    constructor() {
        console.log('SafeLinkDirective is active!');
    }

    onConfirmLeavePage(event:MouseEvent){
        const wantToLeave = window.confirm("Do you want to leave app?");

        if(wantToLeave){
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParams();

            return;
        }

        event.preventDefault();

    }
}
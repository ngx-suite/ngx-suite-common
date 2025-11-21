import { Directive, ElementRef, inject } from '@angular/core'

import { NS_BUTTON_HOST_SELECTOR_TO_CLASS_MAP } from '../models'


@Directive({
    selector: '[mat-button][nsStrokedButton], [mat-button][nsFlatButton], [mat-button][nsSmallButton],'
        + '[mat-icon-button][nsStrokedButton], [mat-icon-button][nsFlatButton], [mat-icon-button][nsSmallButton]',
})
export class NsButtonStyleDirective {

    private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    constructor() {
        this.processButtonAttributes()
    }

    private hasHostAttributes(...attributes: string[]): boolean {
        return attributes.some(attribute => this.elementRef.nativeElement.hasAttribute(attribute))
    }

    private processButtonAttributes(): void {
        for (const pair of NS_BUTTON_HOST_SELECTOR_TO_CLASS_MAP) {
            if (this.hasHostAttributes(pair.selector)) {
                pair.cssClasses.forEach((className: string) => {
                    this.elementRef.nativeElement.classList.add(className)
                })
            }
        }
    }

}

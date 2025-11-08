import { Directive, ElementRef } from '@angular/core'

import { NsButton } from '../models'


@Directive({
    selector: '[mat-button][nsStrokedButton], [mat-button][nsFlatButton], [mat-button][nsSmallButton],'
        + '[mat-icon-button][nsStrokedButton], [mat-icon-button][nsFlatButton], [mat-icon-button][nsSmallButton]',
})
export class NsButtonStyleDirective {

    constructor(private readonly elementRef: ElementRef<HTMLElement>) {
        this.processButtonAttributes()
    }

    private hasHostAttributes(...attributes: string[]): boolean {
        return attributes.some(attribute => this.elementRef.nativeElement.hasAttribute(attribute))
    }

    private processButtonAttributes(): void {
        for (const pair of NsButton.HOST_SELECTOR_TO_KRM_BUTTON_CLASS_MAP) {
            if (this.hasHostAttributes(pair.selector)) {
                pair.cssClasses.forEach((className: string) => {
                    this.elementRef.nativeElement.classList.add(className)
                })
            }
        }
    }

}

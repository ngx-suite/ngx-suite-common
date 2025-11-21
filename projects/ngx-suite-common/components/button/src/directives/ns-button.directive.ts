import { Directive, effect, ElementRef, inject, input, OnChanges, SimpleChanges } from '@angular/core'

import {
    getNsButtonSizeCssClassName,
    getNsButtonStyleCssClassName,
    NS_BUTTON_BASE_CLASS_NAME,
    NsButtonSize,
    NsButtonStyle,
} from '../models'


@Directive({
    selector: '[mat-button][nsButtonSize], [mat-button][nsButtonStyle],'
        + '[mat-flat-button][nsButtonSize], [mat-flat-button][nsButtonStyle],'
        + '[mat-stroked-button][nsButtonSize], [mat-stroked-button][nsButtonStyle],'
        + '[mat-icon-button][nsButtonSize], [mat-icon-button][nsButtonStyle]',
})
export class NsButtonDirective implements OnChanges {

    readonly nsButtonSize = input<NsButtonSize>()
    readonly nsButtonStyle = input<NsButtonStyle>()

    // DI
    protected readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    constructor() {

        this.elementRef.nativeElement.classList.add(NS_BUTTON_BASE_CLASS_NAME)

        effect(() => {
            this.processButtonAttributes(this.nsButtonSize(), this.nsButtonStyle())
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { nsButtonSize, nsButtonStyle } = changes

        if (nsButtonSize || nsButtonStyle) {
            this.processButtonAttributes()
        }
    }

    private processButtonAttributes(buttonSize?: NsButtonSize, buttonStyle?: NsButtonStyle): void {
        if (buttonSize) {
            for (const currentButtonSize of Object.values(NsButtonSize)) {
                const cssClassName = getNsButtonSizeCssClassName(currentButtonSize)
                if (buttonSize !== currentButtonSize) {
                    this.elementRef.nativeElement.classList.remove(cssClassName)
                }
                else {
                    this.elementRef.nativeElement.classList.add(cssClassName)
                }
            }
        }

        if (buttonStyle) {
            for (const currentButtonStyle of Object.values(NsButtonStyle)) {
                const cssClassName = getNsButtonStyleCssClassName(currentButtonStyle)
                if (buttonStyle !== currentButtonStyle) {
                    this.elementRef.nativeElement.classList.remove(cssClassName)
                }
                else {
                    this.elementRef.nativeElement.classList.add(cssClassName)
                }
            }
        }
    }

}

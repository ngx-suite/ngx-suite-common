import { Directive, effect, ElementRef, inject, input, OnChanges, SimpleChanges } from '@angular/core'

import { NsButton } from '../models'


@Directive({
    selector: '[mat-button][nsButtonSize], [mat-button][nsButtonStyle],'
        + '[mat-flat-button][nsButtonSize], [mat-flat-button][nsButtonStyle],'
        + '[mat-stroked-button][nsButtonSize], [mat-stroked-button][nsButtonStyle],'
        + '[mat-icon-button][nsButtonSize], [mat-icon-button][nsButtonStyle]',
})
export class NsButtonDirective implements OnChanges {

    readonly nsButtonSize = input<NsButton.ButtonSize>()
    readonly nsButtonStyle = input<NsButton.ButtonStyle>()

    // DI
    protected readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    constructor() {

        this.elementRef.nativeElement.classList.add(NsButton.BASE_CLASS_NAME)

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

    private processButtonAttributes(buttonSize?: NsButton.ButtonSize, buttonStyle?: NsButton.ButtonStyle): void {
        if (buttonSize) {
            for (const currentButtonSize of Object.values(NsButton.ButtonSize)) {
                const cssClassName = NsButton.getSizeCssClassName(currentButtonSize)
                if (buttonSize !== currentButtonSize) {
                    this.elementRef.nativeElement.classList.remove(cssClassName)
                }
                else {
                    this.elementRef.nativeElement.classList.add(cssClassName)
                }
            }
        }

        if (buttonStyle) {
            for (const currentButtonStyle of Object.values(NsButton.ButtonStyle)) {
                const cssClassName = NsButton.getStyleCssClassName(currentButtonStyle)
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

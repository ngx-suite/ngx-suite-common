import { AfterContentInit, Directive, forwardRef, inject, input, OnDestroy, TemplateRef } from '@angular/core'

import { NsMatDialogContentComponent } from '../components'
import { NsMatDialogSectionName } from '../models'


@Directive({
    selector: '[nsMatDialogSection]ng-template',
})
export class NsMatDialogSectionDirective implements OnDestroy, AfterContentInit {

    readonly nsMatDialogSection = input.required<NsMatDialogSectionName>()

    // DI
    protected readonly templateRef = inject<TemplateRef<any>>(forwardRef(() => NsMatDialogContentComponent))
    protected  readonly dialogContentComponent = inject(NsMatDialogContentComponent)

    ngAfterContentInit(): void {
        this.setSectionTemplateRef(this.templateRef)
    }

    ngOnDestroy(): void {
        this.setSectionTemplateRef(null)
    }

    protected setSectionTemplateRef(templateRef: TemplateRef<any> | null): void {
        if (this.nsMatDialogSection() === NsMatDialogSectionName.contentFooter) {
            this.dialogContentComponent.footerTemplatesRef.set(templateRef)
        }
        else if (this.nsMatDialogSection() === NsMatDialogSectionName.contentFooterActions) {
            this.dialogContentComponent.footerActionsTemplatesRef.set(templateRef)
        }
    }

}

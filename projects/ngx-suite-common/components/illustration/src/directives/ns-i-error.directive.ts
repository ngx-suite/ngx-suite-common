import { Directive, inject } from '@angular/core'
import { NsIllustrationComponent } from '@ngx-suite/common/components/illustration'


@Directive({
    selector: '[nsIError]ns-illustration',
})
export class NsIErrorDirective {

    readonly nsIllustrationError = inject(NsIllustrationComponent)

    constructor() {
        this.nsIllustrationError.title.set('Unexpected Error')
        this.nsIllustrationError.name.set('ns-error')
        this.nsIllustrationError.fileExtension.set('png')
    }

}

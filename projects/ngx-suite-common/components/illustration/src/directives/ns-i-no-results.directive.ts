import { Directive, inject } from '@angular/core'
import { NsIllustrationComponent } from '@ngx-suite/common/components/illustration'


@Directive({
    selector: '[nsINoResults]ns-illustration',
})
export class NsINoResultsDirective {

    readonly nsIllustrationError = inject(NsIllustrationComponent)

    constructor() {
        this.nsIllustrationError.title.set('No Results Found')
        this.nsIllustrationError.name.set('ns-no-results')
        this.nsIllustrationError.fileExtension.set('png')
    }

}

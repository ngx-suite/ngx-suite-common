import { Component, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'


export interface INsBaseComponent extends OnDestroy {
    destroyed$: Subject<void>
}

@Component({
    selector: 'ns-base',
    template: '',
})
export abstract class NsBaseComponent implements INsBaseComponent, OnDestroy {

    readonly destroyed$ = new Subject<void>()

    ngOnDestroy(): void {
        this.destroyed$.next()
        this.destroyed$.complete()
    }

}

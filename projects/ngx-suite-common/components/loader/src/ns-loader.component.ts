import { Component, computed, HostBinding, inject, model } from '@angular/core'
import { MatProgressSpinner } from '@angular/material/progress-spinner'

import { NS_LOADER_DEFAULT_OPTIONS, NsLoaderDefaultOptions, NsLoaderPlacement, NsLoaderSize } from './ns-loader.models'


@Component({
    selector: 'ns-loader',
    templateUrl: './ns-loader.component.html',
    host: {
        class: 'ns-loader',
    },
    imports: [
        MatProgressSpinner,
    ],
})
export class NsLoaderComponent {

    // DI
    readonly defaultOptions = inject<NsLoaderDefaultOptions>(NS_LOADER_DEFAULT_OPTIONS, { optional: true })

    readonly size = model<NsLoaderSize>(this.defaultOptions?.loaderSize ?? NsLoaderSize.medium)
    readonly placement = model<NsLoaderPlacement>(this.defaultOptions?.loaderPlacement ?? NsLoaderPlacement.block)
    readonly loadingText = model<string | null>(this.defaultOptions?.loadingText ?? 'Loading...')

    readonly loaderSize = computed<number>(() => this.size() === NsLoaderSize.small ? 24 : 56)

    @HostBinding('class') get hostClasses(): string {
        return `ns-loader-size--${this.size()} ns-loader-placement--${this.placement()}`
    }


}

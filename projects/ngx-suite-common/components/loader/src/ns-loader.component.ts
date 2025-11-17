import { Component, HostBinding, inject, input } from '@angular/core'

import { NS_LOADER_DEFAULT_OPTIONS, NsLoaderDefaultOptions, NsLoaderPlacement, NsLoaderSize } from './ns-loader.models'


@Component({
    selector: 'ns-loader',
    templateUrl: './ns-loader.component.html',
    host: {
        class: 'ns-loader',
    },
})
export class NsLoaderComponent {

    // DI
    readonly defaultOptions = inject<NsLoaderDefaultOptions>(NS_LOADER_DEFAULT_OPTIONS, { optional: true })

    readonly size = input<NsLoaderSize>(this.defaultOptions?.loaderSize ?? NsLoaderSize.medium)
    readonly placement = input<NsLoaderPlacement>(this.defaultOptions?.loaderPlacement ?? NsLoaderPlacement.block)
    readonly loadingText = input<string | null>(this.defaultOptions?.loadingText ?? 'Loading...')

    @HostBinding('class') get hostClasses(): string {
        return `ns-loader-size--${this.size()} ns-loader-placement--${this.placement()}`
    }


}

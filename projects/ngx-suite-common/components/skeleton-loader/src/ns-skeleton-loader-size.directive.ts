import { Directive, input } from '@angular/core'

import { NsSkeletonLoaderSize } from './ns-skeleton-loader.models'


@Directive({
    selector: '[nsSize]ns-skeleton-loader',
    host: {
        '[class.ns-skeleton-loader--size-sm]': 'nsSize() === Size.sm',
        '[class.ns-skeleton-loader--size-md]': 'nsSize() === Size.md',
        '[class.ns-skeleton-loader--size-lg]': 'nsSize() === Size.lg',
        '[class.ns-skeleton-loader--size-xl]': 'nsSize() === Size.xl',
    },
})
export class NsSkeletonLoaderSizeDirective {

    readonly nsSize = input<NsSkeletonLoaderSize | null>(NsSkeletonLoaderSize.md)

    readonly Size = NsSkeletonLoaderSize

}

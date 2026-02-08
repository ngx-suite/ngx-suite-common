import { ChangeDetectionStrategy, Component, input } from '@angular/core'


@Component({
    selector: 'ns-skeleton-loader',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'ns-skeleton-loader',
        '[style.width]': 'width()',
        '[style.height]': 'height()',
    },
})
export class NsSkeletonLoaderComponent {

    readonly width = input<string>('100%')
    readonly height = input<string>('')

}

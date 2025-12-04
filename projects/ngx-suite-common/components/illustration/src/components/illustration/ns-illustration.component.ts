import { ChangeDetectionStrategy, Component, computed, HostBinding, inject, model } from '@angular/core'

import {
    NS_ILLUSTRATION_DEFAULT_BASE_PATH,
    NS_ILLUSTRATION_DEFAULT_FILE_EXTENSION,
    NS_ILLUSTRATION_DEFAULT_OPTIONS,
    NsIllustrationDefaultOptions,
    NsIllustrationPlacement,
    NsIllustrationSize,
} from '../../models'


@Component({
    selector: 'ns-illustration',
    templateUrl: './ns-illustration.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'ns-illustration',
    },
})
export class NsIllustrationComponent {

    // DI
    readonly defaultOptions = inject<NsIllustrationDefaultOptions>(NS_ILLUSTRATION_DEFAULT_OPTIONS, { optional: true })

    readonly name = model<string>()
    readonly title = model<string>()
    readonly message = model<string>()
    readonly size = model<NsIllustrationSize>(this.defaultOptions?.size ?? NsIllustrationSize.basic)
    readonly placement = model<NsIllustrationPlacement>(this.defaultOptions?.placement ?? NsIllustrationPlacement.block)
    readonly basePath = model<string>(this.defaultOptions?.basePath ?? NS_ILLUSTRATION_DEFAULT_BASE_PATH)
    readonly fileExtension = model<string>(this.defaultOptions?.fileExtension ?? NS_ILLUSTRATION_DEFAULT_FILE_EXTENSION)

    readonly illustrationPath = computed<string>(() => `${this.basePath()}/${this.name()}.${this.fileExtension()}`)

    @HostBinding('class') get hostClasses(): string {
        return `ns-illustration-size--${this.size()} ns-illustration-placement--${this.placement()}`
    }

}

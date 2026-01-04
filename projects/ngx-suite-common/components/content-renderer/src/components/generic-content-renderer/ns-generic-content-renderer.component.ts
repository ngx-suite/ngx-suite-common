import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ComponentRef,
    computed,
    effect,
    input,
    output,
    signal,
    Type,
    viewChild,
    ViewContainerRef,
} from '@angular/core'
import { NsBaseComponent, NsGenericEventInfo, NsSafeHtmlPipe, NsTypeHelpers } from '@ngx-suite/common/utils'

import { INsContentRendererComponent, NsContentRendererFactory } from '../../models'


@Component({
    selector: 'ns-generic-content-renderer',
    templateUrl: './ns-generic-content-renderer.component.html',
    imports: [
        NsSafeHtmlPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsGenericContentRendererComponent<TParams = unknown, TEvent extends NsGenericEventInfo = NsGenericEventInfo>
    extends NsBaseComponent implements AfterViewInit {

    readonly params = input.required<TParams>()
    readonly factory = input.required<NsContentRendererFactory<TParams, TEvent>>()

    readonly event = output<TEvent>()

    readonly componentPlaceholderViewRef
        = viewChild('componentPlaceholderViewRef', { read: ViewContainerRef })

    readonly factoryResult = computed<string | Type<INsContentRendererComponent<TParams, TEvent>>>(() => (
        this.factory()(this.params())
    ))

    readonly isPlainText = computed<boolean>(() => {
        return NsTypeHelpers.isString(this.factoryResult())
    })

    readonly plainText = computed<string | null>(() => {
        return this.isPlainText()
            ? this.factoryResult() as string
            : null
    })

    readonly componentType = computed<Type<INsContentRendererComponent<TParams, TEvent>> | null>(() => {
        return !this.isPlainText()
            ? this.factoryResult() as Type<INsContentRendererComponent<TParams, TEvent>>
            : null
    })

    private componentRef = signal<ComponentRef<INsContentRendererComponent<TParams, TEvent>> | null>(null)

    constructor() {
        super()
        effect(() => {
            const params = this.params()
            const componentRef = this.componentRef()
            if (componentRef) {
                this.syncComponentInputs(componentRef, params)
            }
        })
    }

    ngAfterViewInit(): void {
        if (!this.isPlainText()) {
            this.renderComponent()
        }
    }

    private renderComponent(): void {
        const componentRef = this.componentPlaceholderViewRef()!.createComponent(this.componentType()!)
        this.componentRef.set(componentRef)

        componentRef.instance.event
            .subscribe((event) => {
                this.event.emit(event)
            })

    }

    private syncComponentInputs(componentRef: ComponentRef<INsContentRendererComponent<TParams, TEvent>>, params: TParams): void {
        componentRef.setInput('params' satisfies keyof INsContentRendererComponent, params)
        componentRef.changeDetectorRef.markForCheck()
    }


}

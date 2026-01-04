import { InputSignal, OutputEmitterRef, Type } from '@angular/core'
import { NsGenericEventInfo } from '@ngx-suite/common/utils'
import { Observable } from 'rxjs'


export interface INsContentRendererComponent<TParams = unknown, TEvent extends NsGenericEventInfo = NsGenericEventInfo> {

    readonly params: InputSignal<TParams | undefined>
    readonly event: OutputEmitterRef<TEvent>

}

export type NsContentRendererFactory<TParams = unknown, TEvent extends NsGenericEventInfo = NsGenericEventInfo>
    = (params: TParams) => Type<INsContentRendererComponent<TParams, TEvent>> | string

export type NsContentRendererFactoryConfig<TParams = unknown, TEvent extends NsGenericEventInfo = NsGenericEventInfo> = {
    factory: NsContentRendererFactory<TParams, TEvent>
    params?: TParams | Observable<TParams>
}

import { NsRecord } from './ns-generic-types.models'


export type NsGenericEventInfoBase<TEventName = string, TData extends NsRecord = NsRecord> = {
    readonly eventName: TEventName
    data?: TData
}

export type NsGenericEventInfo<TEventName = string, TData extends NsRecord = NsRecord> =
    & NsGenericEventInfoBase<TEventName, TData>
    & NsRecord

export abstract class BaseGenericEventInfoClass<TEventName = string, TData extends NsRecord = NsRecord>
implements NsGenericEventInfoBase<TEventName, TData> {

    readonly eventName!: TEventName

    constructor(public data: TData) {
    }

}

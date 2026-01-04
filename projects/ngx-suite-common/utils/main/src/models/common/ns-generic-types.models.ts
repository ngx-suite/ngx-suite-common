export type NsRecord<T = any, K extends keyof any = string> = Record<K, T>

export type EachOfTmp<T> = {// to make OneOf less gross
    [K in keyof T]: {
        _: { [X in K]: T[K] }
    }
}

// require only one of the keys
export type OneOf<T> = EachOfTmp<T>[keyof T]['_'] & Partial<T>


// use for defining select list
export type SelectOption<T = unknown, TData = unknown> = {
    title: string
    value: T
    additionalData?: TData
}

export type SelectOptionLabelValue<T = string, TData = unknown> = {
    value: T
    label: string
    disabled?: boolean
    additionalData?: TData
}

export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
}

export type DeepPartial<T> = T extends object
    ? {
        [P in keyof T]?: DeepPartial<T[P]>;
    }
    : T

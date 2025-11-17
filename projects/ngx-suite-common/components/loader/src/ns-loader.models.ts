import { InjectionToken } from '@angular/core'


export type NsLoaderSize = 'small' | 'medium'
export const NsLoaderSize: Record<NsLoaderSize, NsLoaderSize> = {
    small: 'small',
    medium: 'medium',
}

export type NsLoaderPlacement = 'block' | 'inline' | 'floating' |'cover' | 'coverNoBackdrop'
export const NsLoaderPlacement: Record<NsLoaderPlacement, NsLoaderPlacement> = {
    block: 'block',
    inline: 'inline',
    floating: 'floating',
    cover: 'cover',
    coverNoBackdrop: 'coverNoBackdrop',
}

export type NsLoaderDefaultOptions = {
    loaderSize?: NsLoaderSize
    loaderPlacement?: NsLoaderPlacement
    loadingText?: string | null
}

export const NS_LOADER_DEFAULT_OPTIONS_FACTORY: () => NsLoaderDefaultOptions = () => ({
    loaderSize: NsLoaderSize.medium,
    loaderPlacement: NsLoaderPlacement.block,
    loadingText: 'Loading ...',
})

export const NS_LOADER_DEFAULT_OPTIONS = new InjectionToken<NsLoaderDefaultOptions>(
    'NS_LOADER_DEFAULT_OPTIONS',
    {
        providedIn: 'root',
        factory: () => NS_LOADER_DEFAULT_OPTIONS_FACTORY(),
    },
)



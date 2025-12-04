import { InjectionToken } from '@angular/core'


export const NS_ILLUSTRATION_DEFAULT_BASE_PATH = './assets/images/ns-illustrations'
export const NS_ILLUSTRATION_DEFAULT_FILE_EXTENSION = 'png'

export type NsIllustrationSize = 'small' | 'basic'
export const NsIllustrationSize: Record<NsIllustrationSize, NsIllustrationSize> = {
    small: 'small',
    basic: 'basic',
}

export type NsIllustrationPlacement = 'block' | 'cover' | 'coverNoBackdrop'
export const NsIllustrationPlacement: Record<NsIllustrationPlacement, NsIllustrationPlacement> = {
    block: 'block',
    cover: 'cover',
    coverNoBackdrop: 'coverNoBackdrop',
}


export type NsIllustrationDefaultOptions = {
    size?: NsIllustrationSize
    placement?: NsIllustrationPlacement
    fileExtension?: string
    basePath?: string
}

export const NS_ILLUSTRATION_DEFAULT_OPTIONS_FACTORY: () => NsIllustrationDefaultOptions = () => ({
    size: NsIllustrationSize.basic,
    placement: NsIllustrationPlacement.block,
    fileExtension: NS_ILLUSTRATION_DEFAULT_FILE_EXTENSION,
    basePath: NS_ILLUSTRATION_DEFAULT_BASE_PATH,
})

export const NS_ILLUSTRATION_DEFAULT_OPTIONS = new InjectionToken<NsIllustrationDefaultOptions>(
    'NS_ILLUSTRATION_DEFAULT_OPTIONS',
    {
        providedIn: 'root',
        factory: () => NS_ILLUSTRATION_DEFAULT_OPTIONS_FACTORY(),
    },
)

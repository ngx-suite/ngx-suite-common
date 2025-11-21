export type NsButtonSize = 'basic' | 'small'
export const NsButtonSize = {
    basic: 'basic' as NsButtonSize,
    small: 'small' as NsButtonSize,
}

export type NsButtonStyle = 'basic' | 'flat' | 'stroked'
export const NsButtonStyle = {
    basic: 'basic' as NsButtonStyle,
    stroked: 'stroked' as NsButtonStyle,
    flat: 'flat' as NsButtonStyle,
}

export const NS_BUTTON_BASE_CLASS_NAME = 'ns-button'

export function getNsButtonSizeCssClassName(buttonSize: NsButtonSize): string {
    return `ns-button-size--${buttonSize}`
}

export function getNsButtonStyleCssClassName(buttonStyle: NsButtonStyle): string {
    return `ns-button-style--${buttonStyle}`
}

export const NS_BUTTON_HOST_SELECTOR_TO_CLASS_MAP: { selector: string; cssClasses: string[] }[] = [
    {
        selector: 'nsNsButton',
        cssClasses: [NS_BUTTON_BASE_CLASS_NAME],
    },
    {
        selector: 'nsSmallNsButton',
        cssClasses: [NS_BUTTON_BASE_CLASS_NAME, getNsButtonSizeCssClassName(NsButtonSize.small)],
    },
    {
        selector: 'nsFlatNsButton',
        cssClasses: [NS_BUTTON_BASE_CLASS_NAME, getNsButtonStyleCssClassName(NsButtonStyle.flat)],
    },
    {
        selector: 'nsStrokedNsButton',
        cssClasses: [NS_BUTTON_BASE_CLASS_NAME, getNsButtonStyleCssClassName(NsButtonStyle.stroked)],
    },
]

export namespace NsButton {

    export type ButtonSize = 'basic' | 'small'
    export const ButtonSize = {
        basic: 'basic' as ButtonSize,
        small: 'small' as ButtonSize,
    }

    export type ButtonStyle = 'basic' | 'flat' | 'stroked'
    export const ButtonStyle = {
        basic: 'basic' as ButtonStyle,
        stroked: 'stroked' as ButtonStyle,
        flat: 'flat' as ButtonStyle,
    }

    export const BASE_CLASS_NAME = 'ns-button'

    export function getSizeCssClassName(buttonSize: ButtonSize): string {
        return `ns-button-size--${buttonSize}`
    }

    export function getStyleCssClassName(buttonStyle: ButtonStyle): string {
        return `ns-button-style--${buttonStyle}`
    }

    export const HOST_SELECTOR_TO_KRM_BUTTON_CLASS_MAP: { selector: string; cssClasses: string[] }[] = [
        {
            selector: 'nsButton',
            cssClasses: [BASE_CLASS_NAME],
        },
        {
            selector: 'nsSmallButton',
            cssClasses: [BASE_CLASS_NAME, getSizeCssClassName(ButtonSize.small)],
        },
        {
            selector: 'nsFlatButton',
            cssClasses: [BASE_CLASS_NAME, getStyleCssClassName(ButtonStyle.flat)],
        },
        {
            selector: 'nsStrokedButton',
            cssClasses: [BASE_CLASS_NAME, getStyleCssClassName(ButtonStyle.stroked)],
        },
    ]

}

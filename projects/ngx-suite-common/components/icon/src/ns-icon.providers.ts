import { Provider } from '@angular/core'

import { NS_DEFAULT_ICONS, NS_ICON_DEFAULT_BASE_PATH, NS_ICON_PROVIDER, NsIconsProvider } from './models'


export function provideNsDefaultIcons(): Provider {
    return {
        provide: NS_ICON_PROVIDER,
        useValue: {
            iconNames: NS_DEFAULT_ICONS,
            basePath: NS_ICON_DEFAULT_BASE_PATH,
        } as NsIconsProvider,
        multi: true,
    }
}


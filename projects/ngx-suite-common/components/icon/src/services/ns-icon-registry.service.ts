import { inject, Injectable } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { NS_ICON_DEFAULT_BASE_PATH, NS_ICON_PROVIDER, NsIconsProvider } from '../models'


@Injectable({ providedIn: 'root' })
export class NsIconRegistry {

    protected readonly defaultBasePath: string = NS_ICON_DEFAULT_BASE_PATH
    protected readonly iconsSet = new Set<string>()

    // DI
    protected readonly iconsProviders = inject<NsIconsProvider[]>(NS_ICON_PROVIDER, { optional: true })
    protected readonly iconRegistry = inject(MatIconRegistry)
    protected readonly sanitizer = inject(DomSanitizer)

    constructor() {

        this.registerAllProviders()

    }

    get allIcons(): string[] {
        return Array.from<string>(this.iconsSet)
    }

    registerIcons(iconNames: string[], basePath?: string): void {
        iconNames
            .forEach(iconName => {
                this.iconsSet.add(iconName)
                const iconUrl = `${(basePath || this.defaultBasePath)}/${iconName}.svg`
                this.iconRegistry.addSvgIcon(
                    iconName,
                    this.sanitizer.bypassSecurityTrustResourceUrl(iconUrl),
                )
            })
    }

    doesIconExist(iconName: string): boolean {
        return this.iconsSet.has(iconName)
    }

    protected registerAllProviders(): void {
        (this.iconsProviders || [])
            .forEach(iconsProvider => {
                if (iconsProvider.iconNames.length && !this.iconsSet.has(iconsProvider.iconNames[0])) {
                    this.registerIcons(iconsProvider.iconNames, iconsProvider.basePath)
                }
            })
    }

}

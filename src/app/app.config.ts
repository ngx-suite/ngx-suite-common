import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { MAT_CARD_CONFIG, MatCardConfig } from '@angular/material/card'
import { BrowserModule } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideNsDefaultIcons } from '@ngx-suite/common/components/icon'

import { routes } from './app.routes'


export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        importProvidersFrom(BrowserModule),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        {
            provide: MAT_CARD_CONFIG,
            useValue: {
                appearance: 'outlined',
            } as MatCardConfig,
        },
        provideNsDefaultIcons(),
    ],
}

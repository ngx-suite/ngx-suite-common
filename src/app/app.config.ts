import { provideHttpClient } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideNsDefaultIcons } from '@ngx-suite/common/components/icon'
import { provideNsMaterialDefaults } from '@ngx-suite/common/utils/material'
import { provideTranslateService } from '@ngx-translate/core'
import { provideMarkdown } from 'ngx-markdown'

import { routes } from './app.routes'


export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        importProvidersFrom(BrowserModule),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideTranslateService({
            fallbackLang: 'en',
            lang: 'en',
        }),
        provideNsDefaultIcons(),
        provideMarkdown(),
        provideNsMaterialDefaults(),
    ],
}

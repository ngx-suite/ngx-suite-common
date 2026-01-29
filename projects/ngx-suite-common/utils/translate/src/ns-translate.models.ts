import { HttpBackend } from '@angular/common/http'
import moment from 'moment'
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader'


export function getNsTranslateLoaderFactory(
    assets: string[], prefix = './assets/i18n'): (httpBackend: HttpBackend) => MultiTranslateHttpLoader {
    return (httpBackend: HttpBackend): MultiTranslateHttpLoader => {
        const loaderAssets = [...assets]
            .map(
                asset => ({
                    prefix: `${prefix}/${asset}/`,
                    suffix: `.json?cache=${moment().format('DD-MM-YYYY')}`,
                }),
            )
        return new MultiTranslateHttpLoader(httpBackend, loaderAssets)
    }
}

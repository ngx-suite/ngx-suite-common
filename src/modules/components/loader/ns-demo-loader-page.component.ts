import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule, MatLabel } from '@angular/material/input'
import { NsLoaderComponent, NsLoaderPlacement, NsLoaderSize } from '@ngx-suite/common/components/loader'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-loader-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        MarkdownComponent,
        NsLoaderComponent,
        MatButtonToggle,
        MatButtonToggleGroup,
        MatFormFieldModule,
        MatInputModule,
        MatLabel,
        FormsModule,
    ],
    templateUrl: './ns-demo-loader-page.component.html',
})
export class NsDemoLoaderPageComponent {

    readonly NsLoaderSize = NsLoaderSize
    readonly NsLoaderPlacement = NsLoaderPlacement

    loaderSize: NsLoaderSize = NsLoaderSize.medium
    loaderPlacement: NsLoaderPlacement = NsLoaderPlacement.block
    loadingText = 'Loading ...'

    get markdownEnums(): string {
        return `
        
        \`\`\`html
        <!-- DEFAULT VALUES WILL BE USED -->
        <ns-loader />
        
        <!-- OVERRIDE -->
        <ns-loader [placement]="loaderPlacement" [size]="loaderSize" [loadingText]="loadingText"/>
        \`\`\`
        
        \`\`\`typescript        
        export type NsLoaderPlacement = 'block' | 'inline' | 'floating' |'cover' | 'coverNoBackdrop'   
        export type NsLoaderSize = 'small' | 'medium'
        
        // override default values
        
        export const NS_LOADER_DEFAULT_OPTIONS = new InjectionToken<NsLoaderDefaultOptions>
        
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
`
    }

}

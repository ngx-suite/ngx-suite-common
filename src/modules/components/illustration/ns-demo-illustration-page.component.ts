import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule, MatLabel } from '@angular/material/input'
import {
    NsIErrorDirective,
    NsIllustrationComponent,
    NsIllustrationPlacement,
    NsIllustrationSize,
    NsINoResultsDirective,
} from '@ngx-suite/common/components/illustration'
import { NsLoaderPlacement } from '@ngx-suite/common/components/loader'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-illustration-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        MarkdownComponent,
        MatButtonToggle,
        MatButtonToggleGroup,
        MatFormFieldModule,
        MatInputModule,
        MatLabel,
        FormsModule,
        NsIllustrationComponent,
        NsIErrorDirective,
        NsINoResultsDirective,
    ],
    templateUrl: './ns-demo-illustration-page.component.html',
})
export class NsDemoIllustrationPageComponent {

    readonly NsIllustrationSize = NsIllustrationSize
    readonly NsIllustrationPlacement = NsIllustrationPlacement

    size: NsIllustrationSize = NsIllustrationSize.basic
    title = 'Unexpected Error Custom'
    message = 'Some error message ...'
    placement = NsIllustrationPlacement.block

    systemSize: NsIllustrationSize = NsIllustrationSize.basic

    get markdownEnums(): string {
        return `
        
        \`\`\`html              
        <!-- message as input param -->
        <ns-illustration [name]="illustrationName" [title]="title" [message]="message" [placement]="placement" [size]="size"/>
        <!-- message as ng-content projection -->
        <ns-illustration [name]="illustrationName" [title]="title" [placement]="placement" [size]="size">
            Message Also can be specified using ng-content projection
        </ns-illustration>
        \`\`\`
        
        \`\`\`typescript        
        
        type NsIllustrationSize = 'small' | 'basic'        
        type NsIllustrationPlacement = 'block' | 'cover' | 'coverNoBackdrop'  
        
        // override default values
                      
        export const NS_ILLUSTRATION_DEFAULT_OPTIONS = new InjectionToken<NsIllustrationDefaultOptions>
        
        export type NsIllustrationDefaultOptions = {
            size?: NsIllustrationSize
            placement?: NsIllustrationPlacement
            fileExtension?: string
            basePath?: string
        }
        
        export const NS_ILLUSTRATION_DEFAULT_OPTIONS_FACTORY: () => NsIllustrationDefaultOptions = () => ({
            size: NsIllustrationSize.basic,
            placement: NsIllustrationPlacement.block,
            fileExtension: 'png',
            basePath: './assets/images/ns-illustrations',
        })

`
    }

    get markdownNoResults(): string {
        return `        
        \`\`\`html              
        <ns-illustration nsINoResults/>
        <!-- Rewrite default title-->
        <ns-illustration nsINoResults [title]="Custom Title"/>
        \`\`\`     
`
    }

    get markdownError(): string {
        return `        
        \`\`\`html              
        <ns-illustration nsIError/>
        <!-- Rewrite default title-->
        <ns-illustration nsIError [title]="Custom Title"/>
        \`\`\`     
`
    }

    protected readonly NsLoaderPlacement = NsLoaderPlacement

}

import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatTooltip } from '@angular/material/tooltip'
import {
    NsBreadcrumbsComponent,
    NsBreadcrumbsItemModel, NsBreadcrumbsItemSuffixDirective,
    NsBreadcrumbsSize,
} from '@ngx-suite/common/components/breadcrumbs'
import { NsButtonSize } from '@ngx-suite/common/components/button'
import { NsIconComponent } from '@ngx-suite/common/components/icon'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-breadcrumbs-page',
    templateUrl: './ns-demo-breadcrumbs-page.component.html',
    imports: [
        MatCardModule,
        MatButtonToggleGroup,
        FormsModule,
        MatButtonToggle,
        NsBreadcrumbsComponent,
        MarkdownComponent,
        NsIconComponent,
        MatTooltip,
        NsBreadcrumbsItemSuffixDirective,
    ],
})
export class NsDemoBreadcrumbsPageComponent {

    size: NsBreadcrumbsSize = NsBreadcrumbsSize.basic

    readonly breadcrumbs: NsBreadcrumbsItemModel<{ id?: string; icon?: string }>[] = [
        {
            icon: 'home',
            iconTooltip: 'Home',
            onClick: () => console.log('Home'),
        },
        {
            label: 'Catalog',
            routerLink: '/',
        },
        {
            label: 'Disabled',
            disabled: true,
            data: {
                id: '123',
            },
        },
        {
            label: 'Product',
        },
    ]

    get markdownBreadcrumbs(): string {
        return `
        \`\`\`typescript 
        type NsBreadcrumbsSize = 'basic' | 'small' | 'large'
        
        type NsBreadcrumbsItem<TData extends NsRecord = NsRecord> = {
            icon?: string
            iconTooltip?: string
            label?: string
            routerLink?: string
            routerLinkQueryParams?: Params
            disabled?: boolean
            onClick?: () => void
            data?: TData
        }         
        \`\`\`             
        \`\`\`html              
        <ns-breadcrumbs [breadcrumbs]="breadcrumbs" />
        
        <!-- REWRITE SUFFIX TEMPLATE -->        
        <ns-breadcrumbs [breadcrumbs]="breadcrumbs"
                        [size]="size">
            <ng-template let-item="item"
                         nsBreadcrumbsItemSuffix>
                @if(item?.data?.['id'] === '123') {
                    <ns-icon 
                        [matTooltip]="'Some tooltip'" 
                        [name]="'ns-info'" 
                        size="small"/>
                }
            </ng-template>
        </ns-breadcrumbs>
        \`\`\`
`
    }


    get markdownBreadcrumbsExample(): string {
        return `\`\`\`typescript 
const breadcrumbs: NsBreadcrumbsItem[] = [
    {
        icon: 'home',
        iconTooltip: 'Home',
        onClick: () => console.log('Home'),
    },
    {
        label: 'Catalog',
        routerLink: '/',
    },
    {
        label: 'Disabled',
        disabled: true,
        data: {
            id: '123',
        },
    },
    {
        label: 'Product',
    },
]           
`
    }

    protected readonly ButtonSize = NsButtonSize

}

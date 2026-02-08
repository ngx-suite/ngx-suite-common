import { Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio'
import {
    NsSkeletonLoaderComponent,
    NsSkeletonLoaderSize,
    NsSkeletonLoaderSizeDirective,
} from '@ngx-suite/common/components/skeleton-loader'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-skeleton-loader-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        MarkdownComponent,
        NsSkeletonLoaderComponent,
        NsSkeletonLoaderSizeDirective,
        MatRadioGroup,
        FormsModule,
        MatRadioButton,
    ],
    templateUrl: './ns-demo-skeleton-loader-page.component.html',
})
export class NsDemoSkeletonLoaderPageComponent {

    readonly sizesList = Object.values(NsSkeletonLoaderSize)

    readonly markdownData = `
        \`\`\`html        
        <!-- ANY SIZE  -->
        <ns-skeleton-loader [width]="'100px'" [height]="'100px'"/>
        
        <!-- PREDEFINED SIZE -->
        <ns-skeleton-loader [nsSize]="size"/>                       
    `
    readonly markdownDataTs = `
        \`\`\`typescript                    
type NsSkeletonLoaderSize = 'sm' | 'md' | 'lg' | 'xl'               
    `

    size: NsSkeletonLoaderSize = NsSkeletonLoaderSize.md

}

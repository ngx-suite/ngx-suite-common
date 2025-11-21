import { NgStyle, TitleCasePipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckbox } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { NsButtonDirective, NsButtonSize, NsButtonStyle } from '@ngx-suite/common/components/button'
import { NsExpandIconDirective, NsIconComponent } from '@ngx-suite/common/components/icon'
import { NsObjValuesPipe } from '@ngx-suite/common/utils'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-mat-buttons',
    templateUrl: './ns-demo-mat-buttons.component.html',
    styleUrls: ['./ns-demo-mat-buttons.component.scss'],
    imports: [
        MatCardModule,
        MatCheckbox,
        MatButtonToggleGroup,
        MatButtonToggle,
        FormsModule,
        MatButtonModule,
        NsButtonDirective,
        NsIconComponent,
        NsExpandIconDirective,
        MatIconModule,
        MarkdownComponent,
        NsObjValuesPipe,
        TitleCasePipe,
        NgStyle,

    ],
})
export class NsDemoMatButtonsComponent {

    readonly ButtonSize = NsButtonSize
    readonly ButtonStyle = NsButtonStyle

    buttonSize: NsButtonSize = NsButtonSize.basic
    buttonDisabled = false
    buttonColor: 'primary' | 'accent' | 'warn' | null = null

    get markdownButtonEnums(): string {
        return `\`\`\`typescript
type NsButtonStyle = 'basic' | 'flat' | 'stroked'
type NsButtonSize = 'basic' | 'small'           


...

class MyComponent {
    // default values
    buttonStyle: NsButtonStyle = NsButtonStyle.basic
    buttonSize: NsButtonSize = NsButtonSize.basic
    buttonColor: 'primary' | 'accent' | 'warn' | undefined = undefined
}
`
    }

    get markdownButtonDirectives(): string {
        return `\`\`\`html
<!-- Mat Button -->
<button mat-button [nsButtonSize]="buttonSize" [nsButtonStyle]="buttonStyle" [color]="buttonColor">
    Label
</button>

<!-- Mat Icon Button -->
<button mat-icon-button [nsButtonSize]="buttonSize" [nsButtonStyle]="buttonStyle" [color]="buttonColor">
    <ns-icon name="ns-copy"/>
</button>`

    }


    get markdownButtonCombination(): string {
        return `\`\`\`html
<!-- Mat Button :: nsFlatButton -->
<button mat-button nsFlatButton>
    Label
</button>

<!-- Mat Button :: nsStrokedButton -->
<button mat-button nsStrokedButton>
    Label
</button>

<!-- Mat Button :: nsFlatButton & nsSmallButton -->
<button mat-button nsFlatButton nsSmallButton>
    Label
</button>

<!-- Mat Button :: nsSmallButton -->
<button mat-button nsSmallButton>
    Label
</button>

<!-- Mat Icon Button :: nsFlatButton -->
<button mat-icon-button nsFlatButton>
    <ns-icon name="ns-copy"/>
</button>

<!-- Mat Icon Button :: nsSmallButton -->
<button mat-icon-button nsSmallButton>
    <ns-icon name="ns-copy"/>
</button>

<!-- Mat Icon Button :: nsFlatButton & nsSmallButton -->
<button mat-icon-button nsFlatButton nsSmallButton>
    <ns-icon name="ns-copy"/>
</button>`

    }

}

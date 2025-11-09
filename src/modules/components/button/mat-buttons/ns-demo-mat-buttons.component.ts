import { NgStyle, TitleCasePipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckbox } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { NsButton, NsButtonDirective } from '@ngx-suite/common/components/button'
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

    readonly ButtonSize = NsButton.ButtonSize
    readonly ButtonStyle = NsButton.ButtonStyle

    buttonSize: NsButton.ButtonSize = NsButton.ButtonSize.basic
    buttonDisabled = false
    buttonColor: 'primary' | 'accent' | 'warn' | null = null

    get markdownButtonEnums(): string {
        return `\`\`\`typescript
namespace NsButton {
    type ButtonStyle = 'basic' | 'flat' | 'stroked'
    type ButtonSize = 'basic' | 'small'           
}

...

class MyComponent {
    // default values
    buttonStyle: NsButton.ButtonStyle = NsButton.ButtonStyle.basic
    buttonSize: NsButton.ButtonSize = NsButton.ButtonSize.basic
    buttonColor: 'primary' | 'accent' | 'warn' | undefined = undefined
}
`
    }

    get markdownButtonCombination(): string {
        return `\`\`\`html
<!-- Mat Button -->
<button [nsButtonSize]="buttonSize"   
        [nsButtonStyle]="buttonStyle"
        [color]="buttonColor"
        mat-button>
    Default
</button>

<!-- Mat Button Directive & nsButtonSize -->
<button [nsButtonSize]="buttonSize"
        [color]="buttonColor"
        mat-flat-button>
    Default
</button>

<!-- Mat Button Directive & nsFlatButton & nsStrokedButton -->
<button [color]="buttonColor"
        mat-button
        nsFlatButton>
    Default
</button>

<!-- Mat Icon Button -->
<button [nsButtonSize]="buttonSize"
        [nsButtonStyle]="buttonStyle"
        [color]="buttonColor"
        mat-icon-button>
    <ns-icon name="ns-copy"/>
</button>\`

<!-- Mat Icon Button & nsFlatButton -->
<button [nsButtonSize]="buttonSize"        
        [color]="buttonColor"
        nsFlatButton
        mat-icon-button>
    <ns-icon name="ns-copy"/>
</button>`
    }

}

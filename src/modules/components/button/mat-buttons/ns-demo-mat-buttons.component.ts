import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckbox } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { NsButton, NsButtonDirective, NsButtonGroupComponent, NsButtonStyleDirective } from '@ngx-suite/common/components/button'
import { NsExpandIconDirective, NsIconComponent } from '@ngx-suite/common/components/icon'


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
        NsButtonStyleDirective,
        NsButtonGroupComponent,
    ],
})
export class NsDemoMatButtonsComponent {

    @Input() buttonSize: NsButton.ButtonSize = NsButton.ButtonSize.basic

    buttonDisabled = false
    buttonStyle: NsButton.ButtonStyle = NsButton.ButtonStyle.basic

    readonly ButtonSize = NsButton.ButtonSize
    readonly ButtonStyle = NsButton.ButtonStyle

}

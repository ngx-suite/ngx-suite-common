import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButton, MatIconButton } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDivider } from '@angular/material/divider'
import { MatIcon } from '@angular/material/icon'
import { NsAlert, NsAlertComponent } from '@ngx-suite/common/components/alert'
import { NsButtonStyleDirective } from '@ngx-suite/common/components/button'
import { NsIconComponent } from '@ngx-suite/common/components/icon'
import { NsObjValuesPipe } from '@ngx-suite/common/utils'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-alert-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        NsAlertComponent,
        NsIconComponent,
        MatButton,
        MarkdownComponent,
        MatIconButton,
        NsButtonStyleDirective,
        MatIcon,
        NsObjValuesPipe,
        MatDivider,
    ],
    templateUrl: './ns-demo-alert-page.component.html',
})
export class NsDemoAlertPageComponent {

    readonly Severity = NsAlert.Severity

    get markdownEnums(): string {
        return `\`\`\`typescript
export namespace NsAlert {

    export type Severity =
        | 'neutral'
        | 'info'
        | 'success'
        | 'error'
        | 'warning'          
}

...

class MyComponent {
    // default values
    alertSeverity: NsAlert.Severity = NsAlert.Severity.info
}

`
    }

    get markdownHtml(): string {
        return `\`\`\`html
<ns-alert [severity]="alertSeverity">
    Some short message
</ns-alert>

<ns-alert severity="info">
    <!-- [nsAlertIcon] selector is used for icon placement -->
    <ns-icon name="check" nsAlertIcon></ns-icon>
    Some short message
    <!-- [nsAlertAction] selector is used for icon placement -->
    <button mat-stroked-button nsAlertAction>Action</button>
</ns-alert>

<ns-alert severity="success">
    <ns-icon name="check" nsAlertIcon></ns-icon>
    <div class="ns-font-title">Alert Title</div>
    Some short message
    <button mat-stroked-button nsAlertAction>Action</button>
</ns-alert>

`
    }

}

import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButton } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { NsAlertComponent } from '@ngx-suite/common/components/alert'
import { NsIconComponent } from '@ngx-suite/common/components/icon'


@Component({
    selector: 'ns-demo-alert-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        NsAlertComponent,
        NsIconComponent,
        MatButton,
    ],
    templateUrl: './ns-demo-alert-page.component.html',
})
export class NsDemoAlertPageComponent {

}

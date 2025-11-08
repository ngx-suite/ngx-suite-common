import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'

import { NsDemoMatButtonsComponent } from './mat-buttons'


@Component({
    selector: 'ns-demo-button-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
        NsDemoMatButtonsComponent,
    ],
    templateUrl: './ns-demo-button-page.component.html',
})
export class NsDemoButtonPageComponent {

}

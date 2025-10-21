import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'


@Component({
    selector: 'ns-demo-home-page',
    imports: [
        MatCardModule,
        ReactiveFormsModule,
    ],
    templateUrl: './ns-demo-home-page.component.html',
})
export class NsDemoHomePageComponent {

}

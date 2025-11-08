import { ChangeDetectionStrategy, Component } from '@angular/core'


@Component({
    selector: 'ns-button-group,[ns-button-group]',
    templateUrl: './ns-button-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsButtonGroupComponent {

}

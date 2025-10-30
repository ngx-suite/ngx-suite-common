import { Pipe, PipeTransform } from '@angular/core'

import { toNsMatOutlinedIcon } from '../models'


@Pipe({
    name: 'nsIconMatOutlined',
})
export class NsIconMatOutlinedPipe implements PipeTransform {

    transform(iconName: string): string {
        return toNsMatOutlinedIcon(iconName)
    }

}

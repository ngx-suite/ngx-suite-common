import { Pipe, PipeTransform } from '@angular/core'

import { toNsSvgIcon } from '../models'


@Pipe({
    name: 'nsIconSvg',
})
export class NsIconSvgPipe implements PipeTransform {

    transform(iconName: string): string {
        return toNsSvgIcon(iconName)
    }

}

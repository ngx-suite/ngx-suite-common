import { Pipe, PipeTransform } from '@angular/core'
import { isNil } from 'lodash-es'

import { NsStringHelpers, NsTypeHelpers } from '../models'


@Pipe({
    name: 'nsErrorMessage',
})
export class NsErrorMessagePipe implements PipeTransform {

    transform(value: Error | null | unknown): string | null {
        if (NsTypeHelpers.isObject(value) && value['message']) {
            return value['message'] as string
        }

        if (isNil(value)) {
            return null
        }

        return NsStringHelpers.toStringValue(value)
    }

}

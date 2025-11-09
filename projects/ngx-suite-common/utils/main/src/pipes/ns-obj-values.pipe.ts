import { Pipe, PipeTransform } from '@angular/core'


@Pipe({name: 'nsObjValues'})
export class NsObjValuesPipe implements PipeTransform {

    transform<TValue>(value: Record<any, TValue>): TValue[] {
        return Object.values(value)
    }

}

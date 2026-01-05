import { Directive, inject, TemplateRef } from '@angular/core'
import { NsBreadcrumbsItemModel } from '@ngx-suite/common/components/breadcrumbs'
import { NsRecord } from '@ngx-suite/common/utils'


export type NsBreadcrumbsItemContentContext<TData extends NsRecord = NsRecord> = {
    breadcrumbItem: NsBreadcrumbsItemModel<TData>
}

@Directive({
    selector: '[nsBreadcrumbsItem]ng-template',
})
export class NsBreadcrumbsItemContentDirective<TData extends NsRecord = NsRecord> {

    readonly templateRef = inject(TemplateRef<NsBreadcrumbsItemContentContext<TData>>)

    static ngTemplateContextGuard<TData extends NsRecord = NsRecord>(
        dir: NsBreadcrumbsItemContentDirective<TData>,
        ctx: unknown): ctx is NsBreadcrumbsItemContentContext<TData> {
        return true
    }

}

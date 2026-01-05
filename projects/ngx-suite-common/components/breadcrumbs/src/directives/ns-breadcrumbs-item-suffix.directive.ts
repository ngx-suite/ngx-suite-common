import { Directive, inject, TemplateRef } from '@angular/core'
import { NsBreadcrumbsItemModel } from '@ngx-suite/common/components/breadcrumbs'
import { NsRecord } from '@ngx-suite/common/utils'


export type NsBreadcrumbsItemSuffixContext<TData extends NsRecord = NsRecord> = {
    item: NsBreadcrumbsItemModel<TData>
}

@Directive({
    selector: '[nsBreadcrumbsItemSuffix]ng-template',
})
export class NsBreadcrumbsItemSuffixDirective<TData extends NsRecord = NsRecord> {

    readonly templateRef = inject(TemplateRef<NsBreadcrumbsItemSuffixContext<TData>>)

    static ngTemplateContextGuard<TData extends NsRecord = NsRecord>(
        dir: NsBreadcrumbsItemSuffixDirective<TData>,
        ctx: unknown): ctx is NsBreadcrumbsItemSuffixContext<TData> {
        return true
    }

}

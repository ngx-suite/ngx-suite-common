import { Routes } from '@angular/router'


export const routes: Routes = [
    {
        path: 'common',
        loadChildren: () => import('../modules/common/ns-demo-common.routes').then((r) => r.routes),
    },
    {
        path: 'components',
        loadChildren: () => import('../modules/components/ns-demo-components.routes').then((r) => r.routes),
    },
    {
        path: '',
        redirectTo: 'common',
        pathMatch: 'full',
    },
]

import { Routes } from '@angular/router'


export const routes: Routes = [
    {
        path: 'components',
        loadChildren: () => import('../modules/components/ns-demo-components.routes').then((r) => r.routes),
    },
    {
        path: '',
        redirectTo: 'components',
        pathMatch: 'full',
    },
]

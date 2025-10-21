import { Routes } from '@angular/router'


export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../modules/home/ns-demo-home.routes').then((r) => r.routes),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
]

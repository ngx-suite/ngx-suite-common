import { Routes } from '@angular/router'

import { NsDemoHomePageComponent } from './pages'


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NsDemoHomePageComponent,
    },
]

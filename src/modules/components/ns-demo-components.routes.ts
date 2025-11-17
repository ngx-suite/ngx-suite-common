import { Routes } from '@angular/router'

import { NsDemoAlertPageComponent } from './alert'
import { NsDemoButtonPageComponent } from './button'
import { NsDemoLoaderPageComponent } from './loader'


export const routes: Routes = [
    {
        path: 'alert',
        component: NsDemoAlertPageComponent,
    },
    {
        path: 'button',
        component: NsDemoButtonPageComponent,
    },
    {
        path: 'loader',
        component: NsDemoLoaderPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'alert',
    },

]

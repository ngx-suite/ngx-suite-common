import { Routes } from '@angular/router'

import { NsDemoAlertPageComponent } from './alert'
import { NsDemoButtonPageComponent } from './button'


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
        path: '',
        pathMatch: 'full',
        redirectTo: 'alert',
    },

]

import { Routes } from '@angular/router'

import { NsDemoTypographyPageComponent } from './typography'


export const routes: Routes = [
    {
        path: 'typography',
        component: NsDemoTypographyPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'typography',
    },

]

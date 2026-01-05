import { Routes } from '@angular/router'

import { NsDemoAlertPageComponent } from './alert'
import { NsDemoBreadcrumbsPageComponent } from './breadcrumbs'
import { NsDemoButtonPageComponent } from './button'
import { NsDemoIllustrationPageComponent } from './illustration'
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
        path: 'breadcrumbs',
        component: NsDemoBreadcrumbsPageComponent,
    },
    {
        path: 'loader',
        component: NsDemoLoaderPageComponent,
    },
    {
        path: 'illustration',
        component: NsDemoIllustrationPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'alert',
    },

]

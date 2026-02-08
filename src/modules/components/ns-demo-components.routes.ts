import { Routes } from '@angular/router'

import { NsDemoAlertPageComponent } from './alert'
import { NsDemoBreadcrumbsPageComponent } from './breadcrumbs'
import { NsDemoButtonPageComponent } from './button'
import { NsDemoConfirmDialogPageComponent } from './confirm-dialog'
import { NsDemoIllustrationPageComponent } from './illustration'
import { NsDemoLoaderPageComponent } from './loader'
import { NsDemoSkeletonLoaderPageComponent } from './skeleton-loader'


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
        path: 'confirm-dialog',
        component: NsDemoConfirmDialogPageComponent,
    },
    {
        path: 'skeleton-loader',
        component: NsDemoSkeletonLoaderPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'alert',
    },

]

import { Component } from '@angular/core'
import { MatListItem, MatNavList } from '@angular/material/list'
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet,
        MatDrawerContainer,
        MatDrawer,
        MatDrawerContent,
        MatListItem,
        MatNavList,
        RouterLink,
        RouterLinkActive,
    ],
})
export class AppComponent {

    readonly tabs = [
        {
            category: 'Common',
        },
        {
            label: 'Typography',
            route: '/common/typography',
        },
        {
            category: 'Components',
        },
        {
            label: 'Alert',
            route: '/components/alert',
        },
        {
            label: 'Button',
            route: '/components/button',
        },
        {
            label: 'Breadcrumbs',
            route: '/components/breadcrumbs',
        },
        {
            label: 'Loader',
            route: '/components/loader',
        },
        {
            label: 'Illustration',
            route: '/components/illustration',
        },
    ]

}

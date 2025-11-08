import { Component } from '@angular/core'
import { MatListItem, MatNavList } from '@angular/material/list'
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'


@Component({
    selector: 'app-root',
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
    templateUrl: './app.component.html',
})
export class AppComponent {


    readonly tabs = [
        {
            label: 'Alert',
            route: '/components/alert',
        },
        {
            label: 'Button',
            route: '/components/button',
        },
    ]

}

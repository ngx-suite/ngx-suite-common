import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MarkdownComponent } from 'ngx-markdown'


@Component({
    selector: 'ns-demo-typography-page',
    templateUrl: './ns-demo-typography-page.component.html',
    imports: [
        MatCardModule,
        MarkdownComponent,
    ],
})
export class NsDemoTypographyPageComponent {

    get markdownData(): string {
        return `\`\`\`html
<div class="ns-font-display-lg">Display lg</div>
<div class="ns-font-display">Display</div>
<div class="ns-font-display-sm">Display sm</div>

<div class="ns-font-headline-lg">Headline lg</div>
<div class="ns-font-headline">Headline</div>
<div class="ns-font-headline-sm">Headline sm</div>

<div class="ns-font-title-lg">Title lg</div>
<div class="ns-font-title">Title</div>
<div class="ns-font-title-sm">Title sm</div>
           
<div class="ns-font-label-lg">Label lg</div>
<div class="ns-font-label">Label</div>
<div class="ns-font-label-sm">Label sm</div>

<div class="ns-font-body-xl">Body xl</div>
<div class="ns-font-body-lg">Body lg</div>
<div class="ns-font-body">Body</div>
<div class="ns-font-body-sm">Body sm</div>
`
    }

    get markdownCssVarsData(): string {
        return `\`\`\`css
:root {
    --ns-font-family--body: 'Roboto', sans-serif;
    --ns-font-family--title: 'Roboto', sans-serif;
    --ns-font-family--code: 'Source Code Pro';

    --ns-font-size--display-lg: 57px;
    --ns-font-size--display: 45px;
    --ns-font-size--display-sm: 36px;

    --ns-font-size--headline-lg: 32px;
    --ns-font-size--headline: 28px;
    --ns-font-size--headline-sm: 24px;

    --ns-font-size--title-lg: 22px;
    --ns-font-size--title: 16px;
    --ns-font-size--title-sm: 14px;

    --ns-font-size--body-xl: 22px;
    --ns-font-size--body-lg: 16px;
    --ns-font-size--body: 14px;
    --ns-font-size--body-sm: 12px;

    --ns-font-size--label-lg: 14px;
    --ns-font-size--label: 12px;
    --ns-font-size--label-sm: 11px;

    --ns-font-size--overline: 10px;

    --ns-font-size-icon: 24px;
    --ns-font-size-icon--small: 16px;
}`
    }

    get markdownMixinsData(): string {
        return `\`\`\`css
@use 'ngx-suite-common/mixins';

.my-custom-css-selector {
    @include mixins.ns-font-display-lg();
 }
    
`
    }

}

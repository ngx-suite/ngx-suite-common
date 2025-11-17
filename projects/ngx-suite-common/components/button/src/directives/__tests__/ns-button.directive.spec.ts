import { Component, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { By } from '@angular/platform-browser'

import { NsButton } from '../../models'
import { NsButtonDirective } from '../ns-button.directive'


@Component({
    template: `
        <button mat-button
                [nsButtonSize]="buttonSize"
                [nsButtonStyle]="buttonStyle">
            Test Button
        </button>
    `,
    imports: [
        NsButtonDirective,
        MatButtonModule,
    ],
})
class TestHostComponent {

    buttonSize: NsButton.ButtonSize | undefined
    buttonStyle: NsButton.ButtonStyle | undefined

}

describe('NsButtonDirective', () => {
    let component: TestHostComponent
    let fixture: ComponentFixture<TestHostComponent>
    let buttonElement: HTMLElement
    let buttonDebugElement: DebugElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
            ],
        }).compileComponents()

        fixture = TestBed.createComponent(TestHostComponent)
        component = fixture.componentInstance
        buttonDebugElement = fixture.debugElement.query(By.directive(NsButtonDirective))
        buttonElement = buttonDebugElement.nativeElement
    })

    describe('Initialization', () => {
        test('should create the directive', () => {
            const directive = buttonDebugElement.injector.get(NsButtonDirective)
            expect(directive).toBeTruthy()
        })

        test('should add base class name on initialization', () => {
            fixture.detectChanges()
            expect(buttonElement.classList.contains(NsButton.BASE_CLASS_NAME)).toBe(true)
        })

        test('should add base class name without inputs', () => {
            component.buttonSize = undefined
            component.buttonStyle = undefined
            fixture.detectChanges()
            expect(buttonElement.classList.contains(NsButton.BASE_CLASS_NAME)).toBe(true)
        })
    })

    describe('Button Size', () => {
        test('should add size class when nsButtonSize is set', () => {
            const size = NsButton.ButtonSize.basic
            component.buttonSize = size
            fixture.detectChanges()

            const cssClassName = NsButton.getSizeCssClassName(size)
            expect(buttonElement.classList.contains(cssClassName)).toBe(true)
        })

        test('should handle all button size values', () => {
            for (const size of Object.values(NsButton.ButtonSize)) {
                component.buttonSize = size
                fixture.detectChanges()

                const cssClassName = NsButton.getSizeCssClassName(size)
                expect(buttonElement.classList.contains(cssClassName)).toBe(true)
            }
        })

        test('should remove old size class when size changes', () => {
            const oldSize = NsButton.ButtonSize.small
            const newSize = NsButton.ButtonSize.basic

            component.buttonSize = oldSize
            fixture.detectChanges()

            const oldCssClassName = NsButton.getSizeCssClassName(oldSize)
            expect(buttonElement.classList.contains(oldCssClassName)).toBe(true)

            component.buttonSize = newSize
            fixture.detectChanges()

            expect(buttonElement.classList.contains(oldCssClassName)).toBe(false)
            const newCssClassName = NsButton.getSizeCssClassName(newSize)
            expect(buttonElement.classList.contains(newCssClassName)).toBe(true)
        })

        test('should not add size classes when nsButtonSize is undefined', () => {
            component.buttonSize = undefined
            fixture.detectChanges()

            for (const size of Object.values(NsButton.ButtonSize)) {
                const cssClassName = NsButton.getSizeCssClassName(size)
                expect(buttonElement.classList.contains(cssClassName)).toBe(false)
            }
        })
    })

    describe('Button Style', () => {
        test('should add style class when nsButtonStyle is set', () => {
            const style = NsButton.ButtonStyle.basic
            component.buttonStyle = style
            fixture.detectChanges()

            const cssClassName = NsButton.getStyleCssClassName(style)
            expect(buttonElement.classList.contains(cssClassName)).toBe(true)
        })

        test('should handle all button style values', () => {
            for (const style of Object.values(NsButton.ButtonStyle)) {
                component.buttonStyle = style
                fixture.detectChanges()

                const cssClassName = NsButton.getStyleCssClassName(style)
                expect(buttonElement.classList.contains(cssClassName)).toBe(true)
            }
        })

        test('should remove old style class when style changes', () => {
            const oldStyle = NsButton.ButtonStyle.basic
            const newStyle = NsButton.ButtonStyle.flat

            component.buttonStyle = oldStyle
            fixture.detectChanges()

            const oldCssClassName = NsButton.getStyleCssClassName(oldStyle)
            expect(buttonElement.classList.contains(oldCssClassName)).toBe(true)

            component.buttonStyle = newStyle
            fixture.detectChanges()

            expect(buttonElement.classList.contains(oldCssClassName)).toBe(false)
            const newCssClassName = NsButton.getStyleCssClassName(newStyle)
            expect(buttonElement.classList.contains(newCssClassName)).toBe(true)
        })

        test('should not add style classes when nsButtonStyle is undefined', () => {
            component.buttonStyle = undefined
            fixture.detectChanges()

            for (const style of Object.values(NsButton.ButtonStyle)) {
                const cssClassName = NsButton.getStyleCssClassName(style)
                expect(buttonElement.classList.contains(cssClassName)).toBe(false)
            }
        })
    })

    describe('Combined Size and Style', () => {
        test('should apply both size and style classes', () => {
            const size = NsButton.ButtonSize.small
            const style = NsButton.ButtonStyle.stroked

            component.buttonSize = size
            component.buttonStyle = style
            fixture.detectChanges()

            const sizeCssClassName = NsButton.getSizeCssClassName(size)
            const styleCssClassName = NsButton.getStyleCssClassName(style)

            expect(buttonElement.classList.contains(NsButton.BASE_CLASS_NAME)).toBe(true)
            expect(buttonElement.classList.contains(sizeCssClassName)).toBe(true)
            expect(buttonElement.classList.contains(styleCssClassName)).toBe(true)
        })

        test('should update both size and style independently', () => {
            const size1 = NsButton.ButtonSize.small
            const style1 = NsButton.ButtonStyle.flat

            const size2 = NsButton.ButtonSize.basic
            const style2 = NsButton.ButtonStyle.stroked

            component.buttonSize = size1
            component.buttonStyle = style1
            fixture.detectChanges()

            // Change only size
            component.buttonSize = size2
            fixture.detectChanges()

            expect(buttonElement.classList.contains(NsButton.getSizeCssClassName(size1))).toBe(false)
            expect(buttonElement.classList.contains(NsButton.getSizeCssClassName(size2))).toBe(true)
            expect(buttonElement.classList.contains(NsButton.getStyleCssClassName(style1))).toBe(true)

            // Change only style
            component.buttonStyle = style2
            fixture.detectChanges()

            expect(buttonElement.classList.contains(NsButton.getSizeCssClassName(size2))).toBe(true)
            expect(buttonElement.classList.contains(NsButton.getStyleCssClassName(style1))).toBe(false)
            expect(buttonElement.classList.contains(NsButton.getStyleCssClassName(style2))).toBe(true)
        })
    })

    describe('ngOnChanges', () => {
        test('should process attributes when nsButtonSize changes', () => {
            component.buttonSize = NsButton.ButtonSize.small
            fixture.detectChanges()

            const newSize = NsButton.ButtonSize.basic
            component.buttonSize = newSize
            fixture.detectChanges()

            const cssClassName = NsButton.getSizeCssClassName(newSize)
            expect(buttonElement.classList.contains(cssClassName)).toBe(true)
        })

        test('should process attributes when nsButtonStyle changes', () => {
            component.buttonStyle = NsButton.ButtonStyle.flat
            fixture.detectChanges()

            const newStyle = NsButton.ButtonStyle.stroked
            component.buttonStyle = newStyle
            fixture.detectChanges()

            const cssClassName = NsButton.getStyleCssClassName(newStyle)
            expect(buttonElement.classList.contains(cssClassName)).toBe(true)
        })

        test('should not duplicate base class on changes', () => {
            component.buttonSize = NsButton.ButtonSize.basic
            fixture.detectChanges()

            component.buttonSize = NsButton.ButtonSize.small
            fixture.detectChanges()

            const baseClassCount = Array.from(buttonElement.classList)
                .filter(className => className === NsButton.BASE_CLASS_NAME).length
            expect(baseClassCount).toBe(1)
        })
    })
})

describe('NsButtonDirective :: Selector variants', () => {
    test('should work with mat-flat-button', async () => {
        @Component({
            template: '<button mat-flat-button [nsButtonSize]="size">Test</button>',
            imports: [NsButtonDirective, MatButtonModule],
        })
        class FlatButtonTestComponent {

            size = NsButton.ButtonSize.basic

        }

        await TestBed.configureTestingModule({
            imports: [FlatButtonTestComponent],
        }).compileComponents()

        const flatFixture = TestBed.createComponent(FlatButtonTestComponent)
        flatFixture.detectChanges()
        const flatButton = flatFixture.debugElement.query(By.directive(NsButtonDirective))

        expect(flatButton).toBeTruthy()
    })

    test('should work with mat-stroked-button', async () => {
        @Component({
            template: '<button mat-stroked-button [nsButtonSize]="size">Test</button>',
            imports: [NsButtonDirective, MatButtonModule],
        })
        class StrokedButtonTestComponent {

            size = NsButton.ButtonSize.small

        }

        await TestBed.configureTestingModule({
            imports: [StrokedButtonTestComponent],
        }).compileComponents()

        const strokedFixture = TestBed.createComponent(StrokedButtonTestComponent)
        strokedFixture.detectChanges()
        const strokedButton = strokedFixture.debugElement.query(By.directive(NsButtonDirective))

        expect(strokedButton).toBeTruthy()
    })

    test('should work with mat-icon-button', async () => {
        @Component({
            template: '<button mat-icon-button [nsButtonSize]="size">Test</button>',
            imports: [NsButtonDirective, MatButtonModule],
        })
        class IconButtonTestComponent {

            size = NsButton.ButtonSize.small

        }

        await TestBed.configureTestingModule({
            imports: [IconButtonTestComponent],
        }).compileComponents()

        const iconFixture = TestBed.createComponent(IconButtonTestComponent)
        iconFixture.detectChanges()
        const iconButton = iconFixture.debugElement.query(By.directive(NsButtonDirective))

        expect(iconButton).toBeTruthy()
    })
})

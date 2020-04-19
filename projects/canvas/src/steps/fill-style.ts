import {Directive, Input} from '@angular/core';
import {CanvasDrawStep} from '../interfaces/canvas-draw-step';
import {CANVAS_DRAW_STEPS} from '../tokens/canvas-draw-steps';

const DEFAULT = '#000';

@Directive({
    selector: '[waCanvasFillStyle]',
    providers: [
        {
            provide: CANVAS_DRAW_STEPS,
            useExisting: FillStyleDirective,
            multi: true,
        },
    ],
})
export class FillStyleDirective implements CanvasDrawStep {
    @Input()
    waCanvasFillStyle: string | CanvasGradient | CanvasPattern = DEFAULT;

    beforeHook(context: CanvasRenderingContext2D) {
        context.fillStyle = this.waCanvasFillStyle;
    }

    afterHook(context: CanvasRenderingContext2D) {
        context.fillStyle = DEFAULT;
    }
}
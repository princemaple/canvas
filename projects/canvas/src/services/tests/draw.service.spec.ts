import {of} from 'rxjs';
import {CanvasMethod} from '../../interfaces/canvas-method';
import {DrawService} from '../draw.service';

describe('DrawService', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const prop: CanvasMethod = {
        call: jasmine.createSpy('call'),
    };
    const zone = {
        runOutsideAngular: (fn: Function) => fn(),
    };

    it('calls hooks with context', () => {
        // @ts-ignore
        const service = new DrawService([prop], context, of(0), zone);

        expect(prop.call).toHaveBeenCalledWith(context);
    });
});

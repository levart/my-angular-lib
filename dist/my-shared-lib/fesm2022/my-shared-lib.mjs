import * as i0 from '@angular/core';
import { Component } from '@angular/core';

class MyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: MyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.3", type: MyComponent, isStandalone: true, selector: "lib-my", ngImport: i0, template: `<p>Hello from my shared library!</p>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.3", ngImport: i0, type: MyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my', template: `<p>Hello from my shared library!</p>` }]
        }] });

/*
 * Public API Surface of my-shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyComponent };
//# sourceMappingURL=my-shared-lib.mjs.map

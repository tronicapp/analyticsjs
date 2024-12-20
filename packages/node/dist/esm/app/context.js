// create a derived class since we may want to add node specific things to Context later
import { CoreContext } from '@tronic/receiver-core';
// While this is not a type, it is a definition
export class Context extends CoreContext {
    static system() {
        return new this({ type: 'track', event: 'system' });
    }
}
//# sourceMappingURL=context.js.map
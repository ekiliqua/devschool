import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class UnSubscriptionHandler implements OnDestroy {
    protected componentDestroyed: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    }
}

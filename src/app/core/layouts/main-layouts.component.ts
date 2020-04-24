import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-main-name',
    template: `<app-header>
    </app-header>
    <app-slider></app-slider>
    <main>
    <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

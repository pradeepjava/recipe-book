import { Component, EventEmitter, Output } from '@angular/core'

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;
    @Output() eventGenerator = new EventEmitter<string>();
    decideMenu(feature: string) {
        this.eventGenerator.emit(feature);
    }
}
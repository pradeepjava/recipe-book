import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'alert-message',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() message: string;
    @Output() closeEvent = new EventEmitter<void>();
    
    onClose() {
        this.closeEvent.emit();
    }
}
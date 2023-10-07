import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {

  @Output() restart:EventEmitter<any> = new EventEmitter();

  constructor() { }

  sendReloadToParent(){
    this.restart.emit(true);
  }

}

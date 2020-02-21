import { IModalDialog, IModalDialogOptions } from '../../../../src/modal-dialog.interface';
import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  template: `
    <p>This component is custom.</p>
    <p>This came from parent: <b>{{parentInfo}}</b></p>
  `,
  styles: [':host { background: lightblue; display: block; padding: 5px } ']
})
export class CustomModalComponent implements IModalDialog {
  parentInfo: string;

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
  }
}

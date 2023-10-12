import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() addFact = new EventEmitter();

  e = false;

  title = new FormControl('', Validators.required);

  addValue() {
    if (this.title.invalid) {
      return;
    }
    this.addFact.emit(this.title.value);
    this.title.reset();
  }
}

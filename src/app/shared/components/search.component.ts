import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchUsersComponent {
  @Output() public search = new EventEmitter<string>();

  formUser = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  enviar(): void {
    const { name } = this.formUser.getRawValue();
    if (this.formUser.valid) {
      this.search.emit(name || '');
    }
  }
}
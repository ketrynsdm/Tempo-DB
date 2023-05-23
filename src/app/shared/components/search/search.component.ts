import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() public search = new EventEmitter<string>();

  formCity = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  enviar(): void {
    const { name } = this.formCity.getRawValue();
    if (this.formCity.valid) {
      this.search.emit(name || '');
    }
  }
}
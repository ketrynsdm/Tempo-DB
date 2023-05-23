import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CityResult } from '../interface/city.result.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() public search = new EventEmitter<string>();
  @Input() public listUser = new EventEmitter<string>();

  inputValue: string = '';

  cityResult: CityResult[] = [];

  constructor(private service: ServiceService) {}

  searchCity(event: string): void {
    this.inputValue = event;
    if (event !== null) {
      this.service.cityList(event).subscribe((res) => {
        return (this.cityResult = res.items);
      });
    }
  }
}

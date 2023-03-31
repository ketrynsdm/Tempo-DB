import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReservaVeiculoComponent } from './consulta-reserva-veiculo.component';

describe('ConsultaReservaVeiculoComponent', () => {
  let component: ConsultaReservaVeiculoComponent;
  let fixture: ComponentFixture<ConsultaReservaVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReservaVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReservaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

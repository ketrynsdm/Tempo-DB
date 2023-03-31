import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoReservaVeiculoComponent } from './manutencao-reserva-veiculo.component';

describe('ManutencaoReservaVeiculoComponent', () => {
  let component: ManutencaoReservaVeiculoComponent;
  let fixture: ComponentFixture<ManutencaoReservaVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoReservaVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoReservaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

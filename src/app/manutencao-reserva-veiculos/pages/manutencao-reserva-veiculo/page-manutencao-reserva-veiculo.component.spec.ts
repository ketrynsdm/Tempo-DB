import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageManutencaoReservaVeiculoComponent } from './page-manutencao-reserva-veiculo.component';

describe('PageManutencaoReservaVeiculoComponent', () => {
  let component: PageManutencaoReservaVeiculoComponent;
  let fixture: ComponentFixture<PageManutencaoReservaVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageManutencaoReservaVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageManutencaoReservaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

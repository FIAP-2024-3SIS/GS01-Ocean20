import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroNivelpoluicaoComponent } from './filtro-nivelpoluicao.component';

describe('FiltroNivelpoluicaoComponent', () => {
  let component: FiltroNivelpoluicaoComponent;
  let fixture: ComponentFixture<FiltroNivelpoluicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroNivelpoluicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroNivelpoluicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

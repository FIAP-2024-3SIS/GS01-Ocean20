import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroStatusconservacaoComponent } from './filtro-statusconservacao.component';

describe('FiltroStatusconservacaoComponent', () => {
  let component: FiltroStatusconservacaoComponent;
  let fixture: ComponentFixture<FiltroStatusconservacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroStatusconservacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroStatusconservacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

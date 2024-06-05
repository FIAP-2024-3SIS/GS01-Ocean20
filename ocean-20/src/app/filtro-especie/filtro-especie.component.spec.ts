import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEspecieComponent } from './filtro-especie.component';

describe('FiltroEspecieComponent', () => {
  let component: FiltroEspecieComponent;
  let fixture: ComponentFixture<FiltroEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroEspecieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroRegiaoComponent } from './filtro-regiao.component';

describe('FiltroRegiaoComponent', () => {
  let component: FiltroRegiaoComponent;
  let fixture: ComponentFixture<FiltroRegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroRegiaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

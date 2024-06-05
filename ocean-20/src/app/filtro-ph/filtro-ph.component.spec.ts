import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPhComponent } from './filtro-ph.component';

describe('FiltroPhComponent', () => {
  let component: FiltroPhComponent;
  let fixture: ComponentFixture<FiltroPhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroPhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

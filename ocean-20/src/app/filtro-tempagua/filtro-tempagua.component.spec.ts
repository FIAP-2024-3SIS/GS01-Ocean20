import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroTempaguaComponent } from './filtro-tempagua.component';

describe('FiltroTempaguaComponent', () => {
  let component: FiltroTempaguaComponent;
  let fixture: ComponentFixture<FiltroTempaguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroTempaguaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroTempaguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

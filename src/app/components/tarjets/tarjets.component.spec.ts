import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetsComponent } from './tarjets.component';

describe('TarjetsComponent', () => {
  let component: TarjetsComponent;
  let fixture: ComponentFixture<TarjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

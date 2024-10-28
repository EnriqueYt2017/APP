import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrDDesarroPage } from './qr-d-desarro.page';

describe('QrDDesarroPage', () => {
  let component: QrDDesarroPage;
  let fixture: ComponentFixture<QrDDesarroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDDesarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

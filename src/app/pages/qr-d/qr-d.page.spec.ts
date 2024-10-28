import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrDPage } from './qr-d.page';

describe('QRDPage', () => {
  let component: QrDPage;
  let fixture: ComponentFixture<QrDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

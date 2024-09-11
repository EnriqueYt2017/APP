import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRDPage } from './qr-d.page';

describe('QRDPage', () => {
  let component: QRDPage;
  let fixture: ComponentFixture<QRDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QRDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

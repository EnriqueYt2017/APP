import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrAPage } from './qr-a.page';

describe('QrAPage', () => {
  let component: QrAPage;
  let fixture: ComponentFixture<QrAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrDBasePage } from './qr-d-base.page';

describe('QrDBasePage', () => {
  let component: QrDBasePage;
  let fixture: ComponentFixture<QrDBasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

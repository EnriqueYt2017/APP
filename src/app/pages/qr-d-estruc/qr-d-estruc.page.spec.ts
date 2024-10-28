import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrDEstrucPage } from './qr-d-estruc.page';

describe('QrDEstrucPage', () => {
  let component: QrDEstrucPage;
  let fixture: ComponentFixture<QrDEstrucPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrDEstrucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

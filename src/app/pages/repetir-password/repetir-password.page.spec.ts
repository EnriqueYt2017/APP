import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepetirPasswordPage } from './repetir-password.page';

describe('RepetirPasswordPage', () => {
  let component: RepetirPasswordPage;
  let fixture: ComponentFixture<RepetirPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetirPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginDPage } from './login-d.page';

describe('LoginDPage', () => {
  let component: LoginDPage;
  let fixture: ComponentFixture<LoginDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

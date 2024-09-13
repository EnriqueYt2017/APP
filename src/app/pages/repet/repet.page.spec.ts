import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepetPage } from './repet.page';

describe('RepetPage', () => {
  let component: RepetPage;
  let fixture: ComponentFixture<RepetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

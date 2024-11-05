import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCurPage } from './lista-cur.page';

describe('ListaCurPage', () => {
  let component: ListaCurPage;
  let fixture: ComponentFixture<ListaCurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

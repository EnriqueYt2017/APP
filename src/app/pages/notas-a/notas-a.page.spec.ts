import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotasAPage } from './notas-a.page';

describe('NotasAPage', () => {
  let component: NotasAPage;
  let fixture: ComponentFixture<NotasAPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeDPage } from './informe-d.page';

describe('InformeDPage', () => {
  let component: InformeDPage;
  let fixture: ComponentFixture<InformeDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

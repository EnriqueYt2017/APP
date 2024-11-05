import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaInformePage } from './lista-informe.page';

describe('ListaInformePage', () => {
  let component: ListaInformePage;
  let fixture: ComponentFixture<ListaInformePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInformePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

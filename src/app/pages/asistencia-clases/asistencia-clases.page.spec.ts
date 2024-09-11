import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaClasesPage } from './asistencia-clases.page';

describe('AsistenciaClasesPage', () => {
  let component: AsistenciaClasesPage;
  let fixture: ComponentFixture<AsistenciaClasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

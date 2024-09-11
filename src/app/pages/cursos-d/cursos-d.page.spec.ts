import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosDPage } from './cursos-d.page';

describe('CursosDPage', () => {
  let component: CursosDPage;
  let fixture: ComponentFixture<CursosDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

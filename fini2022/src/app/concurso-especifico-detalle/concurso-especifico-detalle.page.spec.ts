import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcursoEspecificoDetallePage } from './concurso-especifico-detalle.page';

describe('ConcursoEspecificoDetallePage', () => {
  let component: ConcursoEspecificoDetallePage;
  let fixture: ComponentFixture<ConcursoEspecificoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoEspecificoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcursoEspecificoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

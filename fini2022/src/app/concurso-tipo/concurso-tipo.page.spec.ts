import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcursoTipoPage } from './concurso-tipo.page';

describe('ConcursoTipoPage', () => {
  let component: ConcursoTipoPage;
  let fixture: ComponentFixture<ConcursoTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursoTipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcursoTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

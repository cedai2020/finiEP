import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenAmplificadaPage } from './imagen-amplificada.page';

describe('ImagenAmplificadaPage', () => {
  let component: ImagenAmplificadaPage;
  let fixture: ComponentFixture<ImagenAmplificadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenAmplificadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenAmplificadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

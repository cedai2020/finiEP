import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistaInvitadoPage } from './artista-invitado.page';

describe('ArtistaInvitadoPage', () => {
  let component: ArtistaInvitadoPage;
  let fixture: ComponentFixture<ArtistaInvitadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaInvitadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistaInvitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

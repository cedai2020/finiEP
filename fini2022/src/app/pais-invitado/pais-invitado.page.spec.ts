import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisInvitadoPage } from './pais-invitado.page';

describe('PaisInvitadoPage', () => {
  let component: PaisInvitadoPage;
  let fixture: ComponentFixture<PaisInvitadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisInvitadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisInvitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

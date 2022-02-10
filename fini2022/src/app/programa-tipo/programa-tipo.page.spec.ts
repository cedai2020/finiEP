import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramaTipoPage } from './programa-tipo.page';

describe('ProgramaTipoPage', () => {
  let component: ProgramaTipoPage;
  let fixture: ComponentFixture<ProgramaTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaTipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramaTransmisionPage } from './programa-transmision.page';

describe('ProgramaTransmisionPage', () => {
  let component: ProgramaTransmisionPage;
  let fixture: ComponentFixture<ProgramaTransmisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaTransmisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaTransmisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

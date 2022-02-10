import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramaDiasPage } from './programa-dias.page';

describe('ProgramaDiasPage', () => {
  let component: ProgramaDiasPage;
  let fixture: ComponentFixture<ProgramaDiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramaDiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaDiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

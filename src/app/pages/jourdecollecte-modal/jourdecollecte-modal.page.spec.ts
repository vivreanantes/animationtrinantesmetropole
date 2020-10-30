import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JourDeCollecteModalPage } from './jourdecollecte-modal.page';

describe('JourDeCollecteModalPage', () => {
  let component: JourDeCollecteModalPage;
  let fixture: ComponentFixture<JourDeCollecteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourDeCollecteModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JourDeCollecteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

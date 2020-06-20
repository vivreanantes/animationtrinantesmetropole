import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichePage } from './fiche.page';

describe('FichePage', () => {
  let component: FichePage;
  let fixture: ComponentFixture<FichePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

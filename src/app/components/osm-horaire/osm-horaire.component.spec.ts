import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsmHoraireComponent } from './osm-horaire.component';

describe('OsmHoraireComponent', () => {
  let component: OsmHoraireComponent;
  let fixture: ComponentFixture<OsmHoraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmHoraireComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsmHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

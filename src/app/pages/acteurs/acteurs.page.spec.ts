import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActeursPage } from './acteurs.page';

describe('ActeursPage', () => {
  let component: ActeursPage;
  let fixture: ComponentFixture<ActeursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActeursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActeursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettesPage } from './recettes.page';

describe('RecettesPage', () => {
  let component: RecettesPage;
  let fixture: ComponentFixture<RecettesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

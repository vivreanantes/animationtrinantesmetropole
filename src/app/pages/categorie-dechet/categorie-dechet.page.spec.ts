import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieDechetPage } from './categorie-dechet.page';

describe('CategorieDechetPage', () => {
  let component: CategorieDechetPage;
  let fixture: ComponentFixture<CategorieDechetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieDechetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieDechetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

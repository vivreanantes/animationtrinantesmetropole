import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteFiltresPage } from './carte-filtres.page';

describe('CarteFiltresPage', () => {
  let component: CarteFiltresPage;
  let fixture: ComponentFixture<CarteFiltresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteFiltresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteFiltresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

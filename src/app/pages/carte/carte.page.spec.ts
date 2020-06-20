import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartePage } from './carte.page';

describe('CartePage', () => {
  let component: CartePage;
  let fixture: ComponentFixture<CartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

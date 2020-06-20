import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelephoneModalPage } from './telephone-modal.page';

describe('TelephoneModalPage', () => {
  let component: TelephoneModalPage;
  let fixture: ComponentFixture<TelephoneModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelephoneModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

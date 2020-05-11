import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DechetPage } from './dechet.page';

describe('DechetPage', () => {
  let component: DechetPage;
  let fixture: ComponentFixture<DechetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DechetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DechetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrisacPage } from './trisac.page';

describe('TrisacPage', () => {
  let component: TrisacPage;
  let fixture: ComponentFixture<TrisacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrisacPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrisacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

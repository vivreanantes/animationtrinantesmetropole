import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DifficultModalPage } from './difficult-modal.page';

describe('DifficultModalPage', () => {
  let component: DifficultModalPage;
  let fixture: ComponentFixture<DifficultModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DifficultModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

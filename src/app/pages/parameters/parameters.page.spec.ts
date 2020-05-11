import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametersPage } from './parameters.page';

describe('ParametersPage', () => {
  let component: ParametersPage;
  let fixture: ComponentFixture<ParametersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DomicileModalPage } from './domicile-modal.page';

describe('DomicileModalPage', () => {
  let component: DomicileModalPage;
  let fixture: ComponentFixture<DomicileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomicileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DomicileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

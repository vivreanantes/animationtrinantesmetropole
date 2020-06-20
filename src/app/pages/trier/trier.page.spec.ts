import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrierPage } from './trier.page';

describe('TrierPage', () => {
  let component: TrierPage;
  let fixture: ComponentFixture<TrierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

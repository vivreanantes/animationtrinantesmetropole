import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollectePage } from './collecte.page';

describe('CollectePage', () => {
  let component: CollectePage;
  let fixture: ComponentFixture<CollectePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

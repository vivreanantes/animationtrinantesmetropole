import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dechet2Page } from './dechet2.page';

describe('Dechet2Page', () => {
  let component: Dechet2Page;
  let fixture: ComponentFixture<Dechet2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dechet2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dechet2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

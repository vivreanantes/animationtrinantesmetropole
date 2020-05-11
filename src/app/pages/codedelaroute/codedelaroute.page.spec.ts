import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CodedelaroutePage } from './codedelaroute.page';

describe('CodedelaroutePage', () => {
  let component: CodedelaroutePage;
  let fixture: ComponentFixture<CodedelaroutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodedelaroutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CodedelaroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

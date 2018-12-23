import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgmainComponent } from './edit-imgmain.component';

describe('EditImgmainComponent', () => {
  let component: EditImgmainComponent;
  let fixture: ComponentFixture<EditImgmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

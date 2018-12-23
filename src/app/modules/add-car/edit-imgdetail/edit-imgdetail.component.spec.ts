import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgdetailComponent } from './edit-imgdetail.component';

describe('EditImgdetailComponent', () => {
  let component: EditImgdetailComponent;
  let fixture: ComponentFixture<EditImgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgitemdetailComponent } from './edit-imgitemdetail.component';

describe('EditImgitemdetailComponent', () => {
  let component: EditImgitemdetailComponent;
  let fixture: ComponentFixture<EditImgitemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgitemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgitemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

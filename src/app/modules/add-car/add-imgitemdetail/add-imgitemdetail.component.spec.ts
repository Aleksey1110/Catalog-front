import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgitemdetailComponent } from './add-imgitemdetail.component';

describe('AddImgitemdetailComponent', () => {
  let component: AddImgitemdetailComponent;
  let fixture: ComponentFixture<AddImgitemdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgitemdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgitemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

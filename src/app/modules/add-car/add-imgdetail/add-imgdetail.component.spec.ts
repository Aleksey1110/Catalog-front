import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgdetailComponent } from './add-imgdetail.component';

describe('AddImgdetailComponent', () => {
  let component: AddImgdetailComponent;
  let fixture: ComponentFixture<AddImgdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

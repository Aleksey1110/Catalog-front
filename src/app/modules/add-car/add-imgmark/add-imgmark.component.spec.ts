import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgmarkComponent } from './add-imgmark.component';

describe('AddImgmarkComponent', () => {
  let component: AddImgmarkComponent;
  let fixture: ComponentFixture<AddImgmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgunitComponent } from './add-imgunit.component';

describe('AddImgunitComponent', () => {
  let component: AddImgunitComponent;
  let fixture: ComponentFixture<AddImgunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

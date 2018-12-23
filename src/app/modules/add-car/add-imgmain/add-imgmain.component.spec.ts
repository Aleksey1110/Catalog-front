import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgmainComponent } from './add-imgmain.component';

describe('AddImgmainComponent', () => {
  let component: AddImgmainComponent;
  let fixture: ComponentFixture<AddImgmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

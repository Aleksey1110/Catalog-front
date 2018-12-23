import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgmodificationComponent } from './add-imgmodification.component';

describe('AddImgmodificationComponent', () => {
  let component: AddImgmodificationComponent;
  let fixture: ComponentFixture<AddImgmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

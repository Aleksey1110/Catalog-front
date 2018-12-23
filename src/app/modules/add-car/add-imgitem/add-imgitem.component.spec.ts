import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgitemComponent } from './add-imgitem.component';

describe('AddImgitemComponent', () => {
  let component: AddImgitemComponent;
  let fixture: ComponentFixture<AddImgitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

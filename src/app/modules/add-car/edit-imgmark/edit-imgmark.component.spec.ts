import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgmarkComponent } from './edit-imgmark.component';

describe('EditImgmarkComponent', () => {
  let component: EditImgmarkComponent;
  let fixture: ComponentFixture<EditImgmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

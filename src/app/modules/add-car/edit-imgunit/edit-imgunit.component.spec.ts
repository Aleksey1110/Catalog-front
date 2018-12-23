import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgunitComponent } from './edit-imgunit.component';

describe('EditImgunitComponent', () => {
  let component: EditImgunitComponent;
  let fixture: ComponentFixture<EditImgunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

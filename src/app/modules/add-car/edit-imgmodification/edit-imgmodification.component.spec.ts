import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgmodificationComponent } from './edit-imgmodification.component';

describe('EditImgmodificationComponent', () => {
  let component: EditImgmodificationComponent;
  let fixture: ComponentFixture<EditImgmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

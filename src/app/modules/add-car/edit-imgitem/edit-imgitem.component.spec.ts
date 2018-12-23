import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgitemComponent } from './edit-imgitem.component';

describe('EditImgitemComponent', () => {
  let component: EditImgitemComponent;
  let fixture: ComponentFixture<EditImgitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

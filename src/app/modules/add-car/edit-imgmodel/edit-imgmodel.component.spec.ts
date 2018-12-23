import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgmodelComponent } from './edit-imgmodel.component';

describe('EditImgmodelComponent', () => {
  let component: EditImgmodelComponent;
  let fixture: ComponentFixture<EditImgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

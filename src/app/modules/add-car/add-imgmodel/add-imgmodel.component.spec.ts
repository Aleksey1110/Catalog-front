import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgmodelComponent } from './add-imgmodel.component';

describe('AddImgmodelComponent', () => {
  let component: AddImgmodelComponent;
  let fixture: ComponentFixture<AddImgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

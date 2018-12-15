import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditingComponent } from './add-editing.component';

describe('AddEditingComponent', () => {
  let component: AddEditingComponent;
  let fixture: ComponentFixture<AddEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

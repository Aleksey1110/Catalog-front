import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModificationComponent } from './edit-modification.component';

describe('EditModificationComponent', () => {
  let component: EditModificationComponent;
  let fixture: ComponentFixture<EditModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailItemComponent } from './edit-detail-item.component';

describe('EditDetailItemComponent', () => {
  let component: EditDetailItemComponent;
  let fixture: ComponentFixture<EditDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

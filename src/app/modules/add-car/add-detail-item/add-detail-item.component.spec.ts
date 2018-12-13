import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailItemComponent } from './add-detail-item.component';

describe('AddDetailItemComponent', () => {
  let component: AddDetailItemComponent;
  let fixture: ComponentFixture<AddDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

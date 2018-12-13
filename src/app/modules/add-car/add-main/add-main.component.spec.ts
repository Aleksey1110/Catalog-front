import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainComponent } from './add-main.component';

describe('AddMainComponent', () => {
  let component: AddMainComponent;
  let fixture: ComponentFixture<AddMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

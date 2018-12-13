import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalogueComponent } from './add-analogue.component';

describe('AddAnalogueComponent', () => {
  let component: AddAnalogueComponent;
  let fixture: ComponentFixture<AddAnalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

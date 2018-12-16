import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailAnalogueComponent } from './edit-detail-analogue.component';

describe('EditDetailAnalogueComponent', () => {
  let component: EditDetailAnalogueComponent;
  let fixture: ComponentFixture<EditDetailAnalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailAnalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailAnalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

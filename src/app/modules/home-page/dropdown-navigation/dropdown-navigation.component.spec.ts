import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNavigationComponent } from './dropdown-navigation.component';

describe('DropdownNavigationComponent', () => {
  let component: DropdownNavigationComponent;
  let fixture: ComponentFixture<DropdownNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNavigationComponent } from './picture-navigation.component';

describe('PictureNavigationComponent', () => {
  let component: PictureNavigationComponent;
  let fixture: ComponentFixture<PictureNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

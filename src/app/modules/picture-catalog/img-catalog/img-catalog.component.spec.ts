import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCatalogComponent } from './img-catalog.component';

describe('ImgCatalogComponent', () => {
  let component: ImgCatalogComponent;
  let fixture: ComponentFixture<ImgCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

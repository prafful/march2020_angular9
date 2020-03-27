import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonotexistComponent } from './donotexist.component';

describe('DonotexistComponent', () => {
  let component: DonotexistComponent;
  let fixture: ComponentFixture<DonotexistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonotexistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonotexistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

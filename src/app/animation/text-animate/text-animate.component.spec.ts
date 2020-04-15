import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnimateComponent } from './text-animate.component';

describe('TextAnimateComponent', () => {
  let component: TextAnimateComponent;
  let fixture: ComponentFixture<TextAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

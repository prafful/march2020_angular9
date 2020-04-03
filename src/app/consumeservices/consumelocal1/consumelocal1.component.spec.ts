import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumelocal1Component } from './consumelocal1.component';

describe('Consumelocal1Component', () => {
  let component: Consumelocal1Component;
  let fixture: ComponentFixture<Consumelocal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumelocal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumelocal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

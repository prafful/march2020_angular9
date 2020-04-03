import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumelocal2Component } from './consumelocal2.component';

describe('Consumelocal2Component', () => {
  let component: Consumelocal2Component;
  let fixture: ComponentFixture<Consumelocal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumelocal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumelocal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

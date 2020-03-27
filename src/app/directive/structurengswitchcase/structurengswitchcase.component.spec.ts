import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurengswitchcaseComponent } from './structurengswitchcase.component';

describe('StructurengswitchcaseComponent', () => {
  let component: StructurengswitchcaseComponent;
  let fixture: ComponentFixture<StructurengswitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructurengswitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurengswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

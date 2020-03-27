import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureComponentNgFor } from './structurengfor.component';

describe('StructureComponent', () => {
  let component: StructureComponentNgFor;
  let fixture: ComponentFixture<StructureComponentNgFor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureComponentNgFor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureComponentNgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

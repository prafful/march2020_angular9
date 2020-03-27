import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurengifComponent } from './structurengif.component';

describe('StructurengifComponent', () => {
  let component: StructurengifComponent;
  let fixture: ComponentFixture<StructurengifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructurengifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurengifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

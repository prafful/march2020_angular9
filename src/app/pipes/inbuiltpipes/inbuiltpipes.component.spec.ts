import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltpipesComponent } from './inbuiltpipes.component';

describe('InbuiltpipesComponent', () => {
  let component: InbuiltpipesComponent;
  let fixture: ComponentFixture<InbuiltpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuiltpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

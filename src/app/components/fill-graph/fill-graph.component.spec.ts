import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillGraphComponent } from './fill-graph.component';

describe('FillGraphComponent', () => {
  let component: FillGraphComponent;
  let fixture: ComponentFixture<FillGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillGraphComponent]
    });
    fixture = TestBed.createComponent(FillGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

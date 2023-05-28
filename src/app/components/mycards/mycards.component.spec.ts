import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardsComponent } from './mycards.component';

describe('MycardsComponent', () => {
  let component: MycardsComponent;
  let fixture: ComponentFixture<MycardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycardsComponent]
    });
    fixture = TestBed.createComponent(MycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

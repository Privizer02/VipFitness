import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRentalsComponent } from './space-rentals.component';

describe('SpaceRentalsComponent', () => {
  let component: SpaceRentalsComponent;
  let fixture: ComponentFixture<SpaceRentalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceRentalsComponent]
    });
    fixture = TestBed.createComponent(SpaceRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

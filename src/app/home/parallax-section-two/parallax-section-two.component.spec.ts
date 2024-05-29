import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxSectionTwoComponent } from './parallax-section-two.component';

describe('ParallaxSectionTwoComponent', () => {
  let component: ParallaxSectionTwoComponent;
  let fixture: ComponentFixture<ParallaxSectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxSectionTwoComponent]
    });
    fixture = TestBed.createComponent(ParallaxSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

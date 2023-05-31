import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymContainerComponent } from './gym-container.component';

describe('GymContainerComponent', () => {
  let component: GymContainerComponent;
  let fixture: ComponentFixture<GymContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

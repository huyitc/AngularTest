import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonepageComponent } from './nonepage.component';

describe('NonepageComponent', () => {
  let component: NonepageComponent;
  let fixture: ComponentFixture<NonepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

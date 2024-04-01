import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSystemComponent } from './complete-system.component';

describe('CompleteSystemComponent', () => {
  let component: CompleteSystemComponent;
  let fixture: ComponentFixture<CompleteSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

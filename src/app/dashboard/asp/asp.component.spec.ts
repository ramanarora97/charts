import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspComponent } from './asp.component';

describe('AspComponent', () => {
  let component: AspComponent;
  let fixture: ComponentFixture<AspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

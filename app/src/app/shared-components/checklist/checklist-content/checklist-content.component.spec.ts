import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistContentComponent } from './checklist-content.component';

describe('ChecklistContentComponent', () => {
  let component: ChecklistContentComponent;
  let fixture: ComponentFixture<ChecklistContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

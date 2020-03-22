import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoreInfoComponent } from './home-more-info.component';

describe('HomeMoreInfoComponent', () => {
  let component: HomeMoreInfoComponent;
  let fixture: ComponentFixture<HomeMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

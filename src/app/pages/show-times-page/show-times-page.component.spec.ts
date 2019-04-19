import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimesPageComponent } from './show-times-page.component';

describe('ShowTimesPageComponent', () => {
  let component: ShowTimesPageComponent;
  let fixture: ComponentFixture<ShowTimesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTimesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSecondComponent } from './root-second.component';

describe('RootSecondComponent', () => {
  let component: RootSecondComponent;
  let fixture: ComponentFixture<RootSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

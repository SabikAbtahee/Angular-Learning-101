import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootThirdComponent } from './root-third.component';

describe('RootThirdComponent', () => {
  let component: RootThirdComponent;
  let fixture: ComponentFixture<RootThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

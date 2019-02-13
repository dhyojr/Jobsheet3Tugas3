import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyuuComponent } from './ryuu.component';

describe('RyuuComponent', () => {
  let component: RyuuComponent;
  let fixture: ComponentFixture<RyuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

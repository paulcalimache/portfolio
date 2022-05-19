import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliComponent } from './appli.component';

describe('AppliComponent', () => {
  let component: AppliComponent;
  let fixture: ComponentFixture<AppliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

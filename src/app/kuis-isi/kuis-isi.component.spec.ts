import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisIsiComponent } from './kuis-isi.component';

describe('KuisIsiComponent', () => {
  let component: KuisIsiComponent;
  let fixture: ComponentFixture<KuisIsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisIsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisIsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

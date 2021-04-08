import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAttributeComponent } from './base-attribute.component';

describe('BaseAttributeComponent', () => {
  let component: BaseAttributeComponent;
  let fixture: ComponentFixture<BaseAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

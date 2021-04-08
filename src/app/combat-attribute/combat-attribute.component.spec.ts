import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatAttributeComponent } from './combat-attribute.component';

describe('CombatAttributeComponent', () => {
  let component: CombatAttributeComponent;
  let fixture: ComponentFixture<CombatAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

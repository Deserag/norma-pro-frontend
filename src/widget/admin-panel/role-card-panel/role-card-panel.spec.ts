import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCardPanel } from './role-card-panel';

describe('RoleCardPanel', () => {
  let component: RoleCardPanel;
  let fixture: ComponentFixture<RoleCardPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleCardPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCardPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

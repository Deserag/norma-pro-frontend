import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUserRole } from './panel-user-role';

describe('PanelUserRole', () => {
  let component: PanelUserRole;
  let fixture: ComponentFixture<PanelUserRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelUserRole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelUserRole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

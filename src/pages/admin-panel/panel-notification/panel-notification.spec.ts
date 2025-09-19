import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNotification } from './panel-notification';

describe('PanelNotification', () => {
  let component: PanelNotification;
  let fixture: ComponentFixture<PanelNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

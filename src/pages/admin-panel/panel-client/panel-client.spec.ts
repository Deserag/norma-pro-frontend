import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClient } from './panel-client';

describe('PanelClient', () => {
  let component: PanelClient;
  let fixture: ComponentFixture<PanelClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOrder } from './panel-order';

describe('PanelOrder', () => {
  let component: PanelOrder;
  let fixture: ComponentFixture<PanelOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

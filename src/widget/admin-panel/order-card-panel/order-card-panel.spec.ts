import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardPanel } from './order-card-panel';

describe('OrderCardPanel', () => {
  let component: OrderCardPanel;
  let fixture: ComponentFixture<OrderCardPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCardPanel } from './client-card-panel';

describe('ClientCardPanel', () => {
  let component: ClientCardPanel;
  let fixture: ComponentFixture<ClientCardPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCardPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCardPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

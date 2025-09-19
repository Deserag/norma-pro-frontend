import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFile } from './panel-file';

describe('PanelFile', () => {
  let component: PanelFile;
  let fixture: ComponentFixture<PanelFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelFile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

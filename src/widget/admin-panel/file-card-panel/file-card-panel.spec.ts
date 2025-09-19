import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCardPanel } from './file-card-panel';

describe('FileCardPanel', () => {
  let component: FileCardPanel;
  let fixture: ComponentFixture<FileCardPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCardPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCardPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

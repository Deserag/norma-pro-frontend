import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUsers } from './client-users';

describe('ClientUsers', () => {
  let component: ClientUsers;
  let fixture: ComponentFixture<ClientUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

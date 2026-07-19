import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarID } from './buscar-id';

describe('BuscarID', () => {
  let component: BuscarID;
  let fixture: ComponentFixture<BuscarID>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarID],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarID);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

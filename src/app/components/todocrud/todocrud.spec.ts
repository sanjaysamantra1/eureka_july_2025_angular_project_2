import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todocrud } from './todocrud';

describe('Todocrud', () => {
  let component: Todocrud;
  let fixture: ComponentFixture<Todocrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todocrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todocrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

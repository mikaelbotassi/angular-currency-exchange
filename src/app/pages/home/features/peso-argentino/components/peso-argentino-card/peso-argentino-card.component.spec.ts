import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoArgentinoCardComponent } from './peso-argentino-card.component';

describe('PesoArgentinoCardComponent', () => {
  let component: PesoArgentinoCardComponent;
  let fixture: ComponentFixture<PesoArgentinoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesoArgentinoCardComponent]
    });
    fixture = TestBed.createComponent(PesoArgentinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

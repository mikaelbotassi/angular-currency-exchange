import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoArgentinoComponent } from './peso-argentino.component';

describe('PesoArgentinoComponent', () => {
  let component: PesoArgentinoComponent;
  let fixture: ComponentFixture<PesoArgentinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesoArgentinoComponent]
    });
    fixture = TestBed.createComponent(PesoArgentinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraEsterlinaCardComponent } from './libra-esterlina-card.component';

describe('LibraEsterlinaCardComponent', () => {
  let component: LibraEsterlinaCardComponent;
  let fixture: ComponentFixture<LibraEsterlinaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraEsterlinaCardComponent]
    });
    fixture = TestBed.createComponent(LibraEsterlinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

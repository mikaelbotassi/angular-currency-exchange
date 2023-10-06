import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraEsterlinaComponent } from './libra-esterlina.component';

describe('LibraEsterlinaComponent', () => {
  let component: LibraEsterlinaComponent;
  let fixture: ComponentFixture<LibraEsterlinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraEsterlinaComponent]
    });
    fixture = TestBed.createComponent(LibraEsterlinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

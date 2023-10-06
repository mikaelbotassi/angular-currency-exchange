import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarCanadenseCardComponent } from './dolar-canadense-card.component';

describe('DolarCanadenseCardComponent', () => {
  let component: DolarCanadenseCardComponent;
  let fixture: ComponentFixture<DolarCanadenseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolarCanadenseCardComponent]
    });
    fixture = TestBed.createComponent(DolarCanadenseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

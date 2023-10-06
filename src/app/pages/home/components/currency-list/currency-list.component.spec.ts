import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyListComponent } from './currency-list.component';
import { FeaturesModule } from '../../features/features.module';
import { HttpClientModule } from '@angular/common/http';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesModule, HttpClientModule],
      declarations: [CurrencyListComponent]
    });
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

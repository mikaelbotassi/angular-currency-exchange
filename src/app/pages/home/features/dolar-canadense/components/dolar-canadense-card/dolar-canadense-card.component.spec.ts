import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarCanadenseCardComponent } from './dolar-canadense-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibraEsterlinaCardComponent } from '../../../libra-esterlina/components/libra-esterlina-card/libra-esterlina-card.component';
import { CardComponent } from 'src/app/pages/home/components/card/card.component';
import { CardHeaderComponent } from 'src/app/pages/home/components/card/card-header/card-header.component';
import { CardContentComponent } from 'src/app/pages/home/components/card/card-content/card-content.component';
import { QuoteApiService } from 'src/app/pages/home/services/quote-api.service';

describe('DolarCanadenseCardComponent', () => {
  let component: DolarCanadenseCardComponent;
  let fixture: ComponentFixture<DolarCanadenseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [
        CardComponent,
        CardContentComponent,
        CardHeaderComponent,
        DolarCanadenseCardComponent
      ],
      providers: [QuoteApiService]
    });
    fixture = TestBed.createComponent(DolarCanadenseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoArgentinoCardComponent } from './peso-argentino-card.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from 'src/app/pages/home/components/card/card.component';
import { CardContentComponent } from 'src/app/pages/home/components/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/pages/home/components/card/card-header/card-header.component';
import { QuoteApiService } from 'src/app/pages/home/services/quote-api.service';

describe('PesoArgentinoCardComponent', () => {
  let component: PesoArgentinoCardComponent;
  let fixture: ComponentFixture<PesoArgentinoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [
        CardComponent,
        CardContentComponent,
        CardHeaderComponent,
        PesoArgentinoCardComponent
      ],
      providers: [QuoteApiService]
    });
    fixture = TestBed.createComponent(PesoArgentinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

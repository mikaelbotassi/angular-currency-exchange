import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraEsterlinaCardComponent } from './libra-esterlina-card.component';
import { QuoteApiService } from 'src/app/pages/home/services/quote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/pages/home/components/card/card.component';
import { CardContentComponent } from 'src/app/pages/home/components/card/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/pages/home/components/card/card-header/card-header.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('LibraEsterlinaCardComponent', () => {
  let component: LibraEsterlinaCardComponent;
  let fixture: ComponentFixture<LibraEsterlinaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [
        LibraEsterlinaCardComponent,
        CardComponent,
        CardContentComponent,
        CardHeaderComponent
      ],
      providers: [QuoteApiService]
    });
    fixture = TestBed.createComponent(LibraEsterlinaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

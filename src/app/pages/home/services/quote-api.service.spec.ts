import { TestBed } from '@angular/core/testing';

import { QuoteApiService } from './quote-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuoteApiService', () => {
  let service: QuoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(QuoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

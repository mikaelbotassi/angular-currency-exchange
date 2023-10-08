import { TestBed } from '@angular/core/testing';

import { QuoteApiService } from './quote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Quote } from '../models/Quote';

describe('QuoteApiService', () => {
  let service: QuoteApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers:[QuoteApiService]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(QuoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get currency', done => {
    
    service.getQuotes("ARS").subscribe({
      next: (resp) => {
        expect(testingRequest.request.method).toBe('GET');
        expect(resp).toEqual([new Quote()]);
        done();
      }
    });

    const testingRequest = httpTestingController.expectOne(req => req.url.includes('ARS'))
    testingRequest.flush([new Quote()]);

  });

});

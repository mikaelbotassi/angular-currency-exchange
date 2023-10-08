import { TestBed, discardPeriodicTasks, fakeAsync, flush, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PesoArgentinoService } from './peso-argentino.service';
import { Quote } from '../../../models/Quote';
import { of } from 'rxjs';

describe('PesoArgentinoService', () => {
  let httpTestingController: HttpTestingController;
  let service: PesoArgentinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PesoArgentinoService]
    });

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(PesoArgentinoService);

  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should get currency', done => {
    
    service.getCurrency().subscribe({
      next: (resp) => {
        expect(testingRequest.request.method).toBe('GET');
        expect(resp).toEqual([new Quote()]);
        done();
      }
    });

    const testingRequest = httpTestingController.expectOne(req => req.url.includes('ARS'))
    testingRequest.flush([new Quote()]);

  });

  it('should update currency after 3 minutes', fakeAsync(() => {

    const mockCurrencyData = [new Quote]
    const getCurrencySpy = spyOn(service, 'getCurrency').and.returnValue(of(mockCurrencyData));

    service.restartRequests();

    expect(getCurrencySpy).toHaveBeenCalled();

    expect(service.currency).toBeUndefined();

    tick(3 * 60 * 1000);

    expect(getCurrencySpy).toHaveBeenCalledTimes(2);

    service.currency$.subscribe({
      next: (resp) => {
        expect(resp).toEqual(mockCurrencyData); 
      }
    })

    service.isLoading$.subscribe({
      next: (resp) => {
        expect(resp).toBeFalse(); 
      }
    })
    
    service.error$.subscribe({
      next: (resp) => {
        expect(resp).toBeFalse(); 
      }
    })

    discardPeriodicTasks();

  }));

});

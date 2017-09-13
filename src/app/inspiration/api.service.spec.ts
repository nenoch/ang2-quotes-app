import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
// import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

fdescribe('ApiService', () => {

  let service:ApiService;
  let mockBackend;

  const mockResponse = {
    'quote': 'Revenge is often like biting a dog because the dog bit you.',
    'author': 'Austin O\'Malley\'',
    'cat': 'anger'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        ApiService
      ]
    });
  });

  beforeEach(inject([ApiService,XHRBackend], (s:ApiService, m:XHRBackend) => {
    service = s;
    mockBackend = m;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getRandomQuote', () => {
    it('should return a random quote in json format', fakeAsync(() => {
      const apiUrl = 'https://talaikis.com/api/quotes/random/';

      mockBackend.connections.subscribe(
      (connection:MockConnection) => {
        expect(connection.request.url).toBe(apiUrl);
        connection.mockRespond(new Response(
          new ResponseOptions({ body: mockResponse })
        ));
      })

      service.getRandomQuote().subscribe(res => {
        expect(res).toEqual(mockResponse);
      })
    }));
  });

  // describe('#handleError', () => {
  //   it('should throw an error when call fails', fakeAsync(() => {
  //     const apiUrl = 'https://talaikis.com/api/quotes/random/';
  //
  //     mockBackend.connections.subscribe(
  //     (connection:MockConnection) => {
  //       expect(connection.request.url).toBe(apiUrl);
  //       connection.mockError(new Error('You broke the internet.'));
  //     })
  //
  //     spyOn(Observable, 'throw')
  //     service.getRandomQuote().subscribe(res => {
  //       expect(console.log).toHaveBeenCalled();
  //     })
  //   }));
  // });

});

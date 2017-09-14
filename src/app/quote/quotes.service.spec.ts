import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Quote } from './quote.model';

import { QuotesService } from './quotes.service';

fdescribe('QuotesService', () => {
  let service:QuotesService;
  let mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        QuotesService
      ]
    });
  });

  beforeEach(inject([QuotesService,XHRBackend], (s:QuotesService, m:XHRBackend) => {
    service = s;
    mockBackend = m;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#addQuote', () => {
    it('should create a new quote', fakeAsync(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(connection.request.url).toBe('http://localhost:3000/quote');
          connection.mockRespond(new Response(
            new ResponseOptions({ body:
              {
                message: 'Test Quote created',
                status: 201
              }
            })
          ));
      })

      let quote = new Quote('test content', 'Test Author');
      service.addQuote(quote).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.message).toBe('Test Quote created');
      });
    }))
  });

  describe('#getQuotes', () => {
    it('should return existing quotes formatted', fakeAsync(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe('http://localhost:3000/quote');
          connection.mockRespond(new Response(
            new ResponseOptions({ body:
              {
                obj:[
                  {
                    "_id":"01",
                    "content":"test content 1.",
                    "author":"Author One",
                    "votes":1
                  },
                  {
                    "_id":"02",
                    "content":"test content 2.",
                    "author":"Author Two",
                    "votes":2
                  }
                ]
              }
            })
          ));
      })

      service.getQuotes().subscribe(res => {

        let formatted = [
          new Quote("test content 1.", "Author One", "01", 1),
          new Quote("test content 2.", "Author Two", "02", 2)
        ];
        expect(res).toBeDefined();
        expect(res).toEqual(formatted);
      });
    }))
  });

  describe('#deleteQuote', () => {
    it('should delete quote', fakeAsync(() => {
      let quote = new Quote("test content 1.", "Author One", "01", 1);

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Delete);
          expect(connection.request.url).toBe(`http://localhost:3000/quote/${quote.quoteId}`);
          connection.mockRespond(new Response(
            new ResponseOptions({ body:
              {
                message: 'Test Quote deleted',
                status: 201
              }
            })
          ));
      })
      // add test for splice from existing this.quotes
      service.deleteQuote(quote).subscribe(res => {

        expect(res).toBeDefined();
        expect(res.message).toEqual('Test Quote deleted');
      });
    }))
  });

});

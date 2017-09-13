import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from './user.model';
import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        AuthService
      ]
    });
  });

  beforeEach(inject([AuthService,XHRBackend], (s:AuthService, m:XHRBackend) => {
    service = s;
    mockBackend = m;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#signup', () => {
    it('should create a new user', fakeAsync(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(connection.request.url).toBe('http://localhost:3000/user');
          connection.mockRespond(new Response(
            new ResponseOptions({ body:
              {
                message: 'Test User created'
              }
            })
          ));
      })

      const user = new User('test@test.com', '123456', 'test12');
      service.signup(user).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.message).toBe('Test User created');
      });


    }))
  });

});

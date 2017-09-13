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
                message: 'Test User created',
                status: 201
              }
            })
          ));
      })

      let user = new User('test@test.com', '123456', 'test12');
      service.signup(user).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.message).toBe('Test User created');
      });


    }))
  });

  describe('#login', () => {
    it('should return a token when user exists', fakeAsync(() => {
      let user = new User('test@test.com', '123456');
      let fakeUserId = 'a0b1c3d4';
      let token = 'secret';

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(connection.request.url).toBe('http://localhost:3000/user/login');
          connection.mockRespond(new Response(
            new ResponseOptions({ body:
              {
                status: 201,
                message: 'Test Login Success',
                token: token,
                userId: fakeUserId
              }
            })
          ));
      })

      service.login(user).subscribe(res => {
        expect(res).toBeDefined();
        expect(res.message).toBe('Test Login Success');
        expect(res.token).toBe(token);
      });
    }))
  });

  describe('#logout', () => {
    it('should clear the localStorage', () => {
      let fakeUserId = 'a0b1c3d4';
      let fakeToken = 'secret';
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('userId', fakeUserId);

      service.logout();
      expect(localStorage.length).toBe(0);
      });
  });

  describe('#isLoggedIn', () => {
    it('should return true if user logged in', () => {
      let fakeUserId = 'a0b1c3d4';
      let fakeToken = 'secret';
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('userId', fakeUserId);

      expect(service.isLoggedIn()).toBe(true);
    });

      it('should return false if user not logged in', () => {
        service.logout();
        expect(service.isLoggedIn()).toBe(false);
      });
  });

});

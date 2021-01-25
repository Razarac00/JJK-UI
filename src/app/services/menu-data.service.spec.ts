import { TestBed } from '@angular/core/testing';

import { MenuDataService } from './menu-data.service';

describe('MenuDataService', () => {
  let service: MenuDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get and set menu data for opponent', () => {
    var expected = '';

    expect(service.data.opponent).toBe(expected);

    expected = 'Dio';
    service.data.opponent = expected;

    expect(service.data.opponent).toBe(expected);
  });

  it('should get and set menu data for difficulty', () => {
    var expected = 0;

    expect(service.data.difficulty).toBe(expected);

    expected = ++expected;
    service.data.difficulty = expected;
    
    expect(service.data.difficulty).toBe(expected);
  });
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServisObjectService } from './servis-object.service';

describe('ServisObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServisObjectService]
    });
  });

  it('should ...', inject([ServisObjectService], (service: ServisObjectService) => {
    expect(service).toBeTruthy();
  }));
});

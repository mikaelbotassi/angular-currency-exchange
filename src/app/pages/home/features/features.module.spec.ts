import { TestBed } from '@angular/core/testing';
import { FeaturesModule } from './features.module';

describe('FeaturesModule', () => {
  let pipe: FeaturesModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FeaturesModule] });
    pipe = TestBed.inject(FeaturesModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});

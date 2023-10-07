/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have the first element with class loader', () => {
    const firsElement = debugElement.query(By.css('div'));
    expect(firsElement).toBeTruthy();
    expect(firsElement.nativeElement.classList.contains('loader')).toBeTrue();
  });
  
  it('should have the second element with class loader', () => {
    const divElements = debugElement.queryAll(By.css('div'));
    expect(divElements.length).toBeGreaterThanOrEqual(2);
    const secondElement = divElements[1];
    expect(secondElement.nativeElement.classList.contains('lds-ring')).toBeTrue();
  });

});

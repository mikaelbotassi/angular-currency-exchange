/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let debugElement:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit restart on button click', () => {
    spyOn(component.restart, 'emit');
    const button = debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.restart.emit).toHaveBeenCalledWith(true);
  });

});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef, DebugElement } from '@angular/core';

import { CardContentComponent } from './card-content.component';
import { HomeModule } from '../../../home.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CardContentComponent', () => {
  let component: CardContentComponent;
  let fixture: ComponentFixture<CardContentComponent>;
  let debugElement:DebugElement;
  // This variable is used when my Component ChangeDetectorStrategy is OnPush;
  let cd: ChangeDetectorRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HomeModule, SharedModule],
      declarations: [ CardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    cd = fixture.componentRef.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set currency on h2', () => {
    const element = debugElement.query(By.css('h2.display-2'));
    expect(element.nativeElement.innerText).toEqual(component.currency);
  });
  
  it('should set percent on card-variation', () => {
    const element = debugElement.query(By.css('.card-variation h5'));
    expect(element.nativeElement.innerText).toEqual(component.percent);
  });
  
  it('should set percent on card-variation', () => {
    const element = debugElement.query(By.css('.card-variation h5'));
    expect(element.nativeElement.innerText).toEqual(component.percent);
  });
  
  it('should set created_date on card-updated', () => {
    const element = debugElement.query(By.css('.card-updated h5'));
    expect(element.nativeElement.innerText).toEqual(component.created_date);
  });
  
  it('should show loader when isLoading equals true', () => {
    component.isLoading = true;
    cd.detectChanges();
    const element = fixture.debugElement.query(By.css('app-loader'));
    expect(element).toBeTruthy();
  });
  
  it('should show error-message when error equals true', () => {
    component.error = true;
    cd.detectChanges();
    const element = fixture.debugElement.query(By.css('app-error-message'));
    expect(element).toBeTruthy();
  });

});

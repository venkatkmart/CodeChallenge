/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameAppComponent } from './game-app.component';

describe('GameAppComponent', () => {
  let component: GameAppComponent;
  let fixture: ComponentFixture<GameAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

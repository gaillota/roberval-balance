import {BalanceComponent} from './balance.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';
import {AppComponent} from "../app.component";

describe('BalanceComponent', function () {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BalanceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    this.balls = fixture.debugElement.query(By.css('.balls'));
  });

  it('should create component', () => expect(component).toBeDefined());

  it('should have 8 ball elements', () => {
    fixture.detectChanges();

    expect(this.balls.children.length).toEqual(8,
      'balls element should have 8 ball element');
  });
});

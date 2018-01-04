import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResolveComponent } from './ticket-resolve.component';

describe('TicketResolveComponent', () => {
  let component: TicketResolveComponent;
  let fixture: ComponentFixture<TicketResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

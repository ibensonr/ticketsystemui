import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAgentviewComponent } from './ticket-agentview.component';

describe('TicketAgentviewComponent', () => {
  let component: TicketAgentviewComponent;
  let fixture: ComponentFixture<TicketAgentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketAgentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketAgentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

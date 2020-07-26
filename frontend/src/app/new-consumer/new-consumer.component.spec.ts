import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsumerComponent } from './new-consumer.component';

describe('NewConumerComponent', () => {
  let component: NewConsumerComponent;
  let fixture: ComponentFixture<NewConusmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

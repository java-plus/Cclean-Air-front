import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneResultatsComponent } from './commune-resultats.component';

describe('CommuneResultatsComponent', () => {
  let component: CommuneResultatsComponent;
  let fixture: ComponentFixture<CommuneResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuneResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuneResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCompoComponent } from './profil-compo.component';

describe('ProfilCompoComponent', () => {
  let component: ProfilCompoComponent;
  let fixture: ComponentFixture<ProfilCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPipeComponent } from './header-pipe.component';

describe('HeaderPipeComponent', () => {
  let component: HeaderPipeComponent;
  let fixture: ComponentFixture<HeaderPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

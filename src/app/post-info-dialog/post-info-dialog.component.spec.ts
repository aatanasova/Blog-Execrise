import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoDialogComponent } from './post-info-dialog.component';

describe('PostInfoDialogComponent', () => {
  let component: PostInfoDialogComponent;
  let fixture: ComponentFixture<PostInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

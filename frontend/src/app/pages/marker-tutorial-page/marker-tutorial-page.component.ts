import { Component, ViewChild, OnInit } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'marker-tutorial-page',
  templateUrl: './marker-tutorial-page.component.html',
  styleUrls: ['./marker-tutorial-page.component.scss']
})
export class MarkerTutorialPageComponent implements OnInit {

  @ViewChild('firstStepVideo') firstStepVideo;
  @ViewChild('secondStepVideo') secondStepVideo;
  @ViewChild('thirdStepVideo') thirdStepVideo;
  @ViewChild('fourthStepVideo') fourthStepVideo;

  formGroup: FormGroup;
  @ViewChild('stepper') stepper : MatHorizontalStepper;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({});
    this.playFirstStepVideo();

    this.stepper.selectionChange.subscribe((event) => {
      switch (event.selectedIndex) {
        case 0: {
          this.playFirstStepVideo();
          break;
        }
        case 1: {
          this.playSecondStepVideo();
          break;
        }
        case 2: {
          this.playThirdStepVideo();
          break;
        }
        case 3: {
          this.playFourthStepVideo();
          break;
        }
      }
    })
  }

  playFirstStepVideo() {
    this.firstStepVideo.nativeElement.play();
    this.secondStepVideo.nativeElement.pause();
    this.thirdStepVideo.nativeElement.pause();
    this.fourthStepVideo.nativeElement.pause();
  }

  playSecondStepVideo() {
    this.firstStepVideo.nativeElement.pause();
    this.secondStepVideo.nativeElement.play();
    this.thirdStepVideo.nativeElement.pause();
    this.fourthStepVideo.nativeElement.pause();
  }

  playThirdStepVideo() {
    this.firstStepVideo.nativeElement.pause();
    this.secondStepVideo.nativeElement.pause();
    this.thirdStepVideo.nativeElement.play();
    this.fourthStepVideo.nativeElement.pause();
  }

  playFourthStepVideo() {
    this.firstStepVideo.nativeElement.pause();
    this.secondStepVideo.nativeElement.pause();
    this.thirdStepVideo.nativeElement.pause();
    this.fourthStepVideo.nativeElement.play();
  }

}
import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { JobService } from '../job.service';

export interface Job {
  postedBy: number;
  nameOfCompany: string;
  logo: string;
  position: string;
}


@Component({
  selector: 'app-add-job-dialog',
  templateUrl: './add-job-dialog.component.html',
  styleUrls: ['./add-job-dialog.component.scss']
})
export class AddJobDialogComponent implements OnInit {
  nameOfCompany = '';
  position = '';
  logo = '';
  postedBy = 2;
  modalVisible = false;
  constructor(private jobService: JobService) {

  }

   onClose(isVisible: boolean) {
    this.modalVisible = isVisible;
   }

  addJob(nameOfCompany, position, logo) {
    const data = {
      // {
      //   "nameOfCompany": "Amazon",
      //   "logo": "",
      //   "position": "Software Engineer",
      //   "postedBy": 3
      // }
      // tslint:disable-next-line: no-string-literal
      nameOfCompany: nameOfCompany,
      logo: this.logo,
      // tslint:disable-next-line: no-string-literal
      position: position,
      postedBy: this.postedBy
    };
    console.log(data);
    this.jobService.addJob(data).subscribe(response => {
      console.log(response);
      // check of isJoined = true? [disabled] = isJoined
    });
  }





 ngOnInit() {
   // https://www.techiediaries.com/angular-ngfor/
 }
}

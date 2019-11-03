import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { AddJobDialogComponent } from '../add-job-dialog/add-job-dialog.component';
import { JobService } from '../job.service';


@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})



export class JobListingComponent implements OnInit {
  card = [];
//   card = [
//   {
            // actual //
//     nameOfCompany: 'Google',
//     position: 'SDE Intern 2020',
//     urlToImage: '../../assets/images/google_PNG19635.png',
//     name: 'Jane Doe',
//     datePosted: 'November, 3'
//   },
//   {
//     title: 'ACV Auctions',
//     subtitle: 'SDE Intern 2020',
//     urlToImage: '../../assets/images/acv.png',
//     postedBy: 'Jane Doe',
//     postedOn: 'November, 1'
//   },
//   {
//     title: 'IBM',
//     subtitle: 'SDE Intern 2020',
//     urlToImage: '../../assets/images/ibm.png',
//     postedBy: 'Jane Doe',
//     postedOn: 'November, 2'
//   },
//   {
//     title: 'Facebook',
//     subtitle: 'SDE Intern 2020',
//     urlToImage: '../../assets/images/fbpng.png',
//     postedBy: 'Jane Doe',
//     postedOn: 'November, 3'
//   },
// ];


  constructor(private jobService: JobService, private dialog: MatDialog) {
   }

   getAllJobs() {
    this.jobService.getAllJobs()
    .subscribe(successResponse => {
      console.log(successResponse);

      // tslint:disable-next-line: no-string-literal
      successResponse['data'].forEach(company => this.card.push({
        nameOfCompany: company.nameOfCompany,
        logo: '../../assets/images/' + company.nameOfCompany + '.png',
        position: company.position,
        datePosted: company.datePosted,
        postedBy: company.postedBy,
        name: company.name,
      }));
      console.log(this.card);
    });
  }



  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.position = {
      top: '0',
      left: '0',
    };

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddJobDialogComponent, dialogConfig);

  }




  ngOnInit() {
    this.getAllJobs();
  }
}











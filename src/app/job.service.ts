import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  getAllJobs() {
    // const response = this.http.get("https://api.jsonbin.io/b/5dac0b4923acbf5c62d3e36f");
    return this.http.get('http://7316d273.ngrok.io/jobs/fetchAll');
  }

  addJob(jobDetails) {
    // data, headers, url -> post call
    const httpOptions = {
      headers: new HttpHeaders({
        // return type content eg: files, html, blob, json
        'Content-Type': 'application/json'
      })
    };
    const addJobUrl = 'http://7316d273.ngrok.io/jobs/add';
    return this.http.post(addJobUrl, jobDetails, httpOptions);
  }


}

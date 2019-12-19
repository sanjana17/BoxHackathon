import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private httpservice: HttpService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      filename: this.formBuilder.control('')
    });
  }

  submitForm(value) {
    const weatherUrl = 'https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/XscMucFEKPRa88d7VWurfVjvD4jUKHdbcsejVgQZ8US7fax3BeGoYRladKkqrnAq/info.json/' + value.zipcode + '/degrees';
    const url = 'https://openweathermap.org/data/2.5/weather?zip=' + value.zipcode + '&appid=b6907d289e10d714a6e88b30761fae22&id=4999837&units=metric';
    //change the url
    this.httpservice.get(url).subscribe(res => {
      console.log(res)
    });
  }

}

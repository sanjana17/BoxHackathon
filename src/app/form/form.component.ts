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
    const url = 'https://openweathermap.org/data/2.5/weather?zip=' + value.zipcode + '&appid=b6907d289e10d714a6e88b30761fae22&id=4999837&units=metric';
    //change the url
    console.log(value)

    this.httpservice.get(url).subscribe(res => {
      console.log(res)
    });
  }

}

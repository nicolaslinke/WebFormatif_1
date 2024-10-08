import { Component } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive.form';

  form: FormGroup<any>;
  formData? : Data;

  constructor(private fb:FormBuilder
    
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      roadnumber: ['', [Validators.required]],
      postalcode: ['', [Validators.pattern("^[A-Z][0-9][A-Z][ ]?[0-9][A-Z][0-9]$")]]
    }, {validator: [this.roadnumberValidator]})
   }


   
  roadnumberValidator(form: AbstractControl): ValidationErrors | null {
    const roadNumber = form.get('roadnumber')?.value;
    console.log(roadNumber);
    console.log("Allo");

    if(!roadNumber){
      return null
    }
  
    if(roadNumber < 1000){
      console.log("error");
      form.get('roadnumber')?.setErrors({tropPetit:true});
    }
    else{
      form.get('roadnumber')?.setErrors(null);
    }
    
   
    return null
  }
}



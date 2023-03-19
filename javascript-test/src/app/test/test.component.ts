import { Component, OnInit, Input } from '@angular/core';
import { TestApiService } from '../test-api.service';
import { Question } from '../models/question'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private testApiService: TestApiService,
    private activated: ActivatedRoute,
    private router: Router 
    ) { }

  questionsArray: Question[]|any = [];
  form: any;
  testId: string | null = '';

  ngOnInit(): void {
    this.form = new FormGroup([]);
    this.questionsArray = this.activated.snapshot.data['data'];
    this.createFormControls();
  }

  createFormControls(){
    this.questionsArray = this.questionsArray.data;
    this.questionsArray.forEach((item: Question) => { 
      this.form.addControl(item._id, new FormControl('', Validators.required));
    });
  }

  submitTest(){
    if(this.form.invalid){
      alert("Please answer all the questions!");
    }
    else{
      this.testId = this.activated.snapshot.paramMap.get('id');
      this.testApiService.getAnswer(this.testId).subscribe(data => {
      this.validateAnswers(data);
    });
    }
  }

  validateAnswers(data: any){
    let correctAnswers = data.data;
    let correctAnswerCounter = 0;
    correctAnswers.map((item:any) => {
      if(this.form.value[item._id] == item.answer){
        correctAnswerCounter++;
      }
    });
    let message = 'You have scored '+correctAnswerCounter+' out of '+this.questionsArray.length;
    alert(message);
    this.router.navigateByUrl('');
  }

}

import { Injectable } from '@angular/core';
import { Question } from './models/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private httpClient: HttpClient) { }

  questionPaper:Question[] = [];

  question = {
    "data":[{
      "_id": "Q_1",
      "question":"What does the abbreviation HTML stand for?",
      "options":[
        "HyperText Markup Language.",
        "HighText Markup Language.",
        "HyperText Markdown Language.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_2",
      "question":"How many sizes of headers are available in HTML by default?",
      "options":[
        "5",
        "1",
        "3",
        "6"
      ]
    },
    {
      "_id": "Q_3",
      "question":"What is the smallest header in HTML by default?",
      "options":[
        "h1",
        "h2",
        "h6",
        "h4"
      ]
    },
    {
      "_id": "Q_4",
      "question":"What are the types of lists available in HTML?",
      "options":[
        "Ordered, Unordered Lists.",
        "Bulleted, Numbered Lists.",
        "Named, Unnamed Lists.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_5",
      "question":"How to create an ordered list in HTML?",
      "options":[
        "<ul>",
        "<ol>",
        "<href>",
        "<b>"
      ]
    },
    {
      "_id": "Q_6",
      "question":"HTML files are saved by default with the extension?",
      "options":[
        ".html",
        ".h",
        ".ht",
        "None of the above"
      ]
    },
    {
      "_id": "Q_7",
      "question":"We enclose HTML tags within?",
      "options":[
        "{}",
        "<>",
        "!!",
        "None of the above"
      ]
    },
    {
      "_id": "Q_8",
      "question":"What is the effect of the <b> tag?",
      "options":[
        "It converts the text within it to bold font.",
        "It is used to write black-colored font.",
        "It is used to change the font size.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_9",
      "question":"Which of the following is correct about HTML?",
      "options":[
        "HTML uses User Defined Tags.",
        "HTML uses tags defined within the language.",
        "Both A and B.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_10",
      "question":"How to display preformatted text in HTML?",
      "options":[
        "<p>",
        "<pre>",
        "<hr>",
        "None of the above."
      ]
    }]
  }
  getTest(id:string | null){
    return this.httpClient.get('assets/'+id+'.json', { responseType: 'json' });
  }

  getAnswer(id:string | null){
    return this.httpClient.get('assets/'+id+'_answer.json', { responseType: 'json' });
  }
}

/*
,
    {
      "_id": "Q_4",
      "question":"What are the types of lists available in HTML?",
      "options":[
        "Ordered, Unordered Lists.",
        "Bulleted, Numbered Lists.",
        "Named, Unnamed Lists.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_5",
      "question":"How to create an ordered list in HTML?",
      "options":[
        "<ul>",
        "<ol>",
        "<href>",
        "<b>"
      ]
    },
    {
      "_id": "Q_6",
      "question":"HTML files are saved by default with the extension?",
      "options":[
        ".html",
        ".h",
        ".ht",
        "None of the above"
      ]
    },
    {
      "_id": "Q_7",
      "question":"We enclose HTML tags within?",
      "options":[
        "{}",
        "<>",
        "!!",
        "None of the above"
      ]
    },
    {
      "_id": "Q_8",
      "question":"What is the effect of the <b> tag?",
      "options":[
        "It converts the text within it to bold font.",
        "It is used to write black-colored font.",
        "It is used to change the font size.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_9",
      "question":"Which of the following is correct about HTML?",
      "options":[
        "HTML uses User Defined Tags.",
        "HTML uses tags defined within the language.",
        "Both A and B.",
        "None of the above."
      ]
    },
    {
      "_id": "Q_10",
      "question":"How to display preformatted text in HTML?",
      "options":[
        "<p>",
        "<pre>",
        "<hr>",
        "None of the above."
      ]
    }
    */

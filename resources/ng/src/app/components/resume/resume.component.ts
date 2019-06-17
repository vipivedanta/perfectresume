import { Component, OnInit } from '@angular/core';
import { NgRedux,NgReduxModule } from '@angular-redux/store';
import { IAppState,rootReducer } from '../../store';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { };

  ngOnInit() {
  }

  testRun(){
  	this.ngRedux.dispatch({type:'add'});
  }

}

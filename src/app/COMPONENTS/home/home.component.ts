import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpService} from 'src/app/SERVICES/http.service';
import { Status } from '../../CLASSES/status';
import { Transition } from '../../CLASSES/transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  statuses:Array<Status>
  transitions:Array<Transition>
  toStatusArray:Array<Status>
  sub1: Subscription;
  sub2
  constructor(public ser:HttpService) {
    
   }

  ngOnInit(): void {
    //to 
    this.sub1 = this.ser.getAllStatuses().subscribe(d=>{this.statuses=d; debugger},e=>{debugger})
    this.ser.getAllTransition().subscribe(d=>{this.transitions=d},e=>{})

  }

  ngOnDestroy(){

this.sub1.unsubscribe();
  }

  addStatus(name)
  {
    let status:Status=new Status(name);
    debugger
    this.ser.postStatus(status).subscribe(d=>{debugger; this.statuses=d},e=>{debugger})
  }

  addTransition(name,fromStatus,toStatus)
  {
    debugger
    let from=this.statuses.find(s=>s.name==fromStatus)
    let to=this.statuses.find(st=>st.name==toStatus)
    let transition:Transition=new Transition(name,from,to)
    this.ser.postTransition(transition).subscribe(d=>{this.transitions=d},e=>{})
  }

  selectFromStatus(value)
  {

    this.toStatusArray=this.statuses.filter(s=>s.name!=value);
  }
  removeStatus(name){
    this.ser.deleteStatus(name).subscribe(d=>{this.statuses=d},e=>{})
  }
  removeTransition(name){
    this.ser.deleteTransition(name).subscribe(d=>{this.transitions=d},e=>{})
  }
  reset(){
    this.ser.resetTransition().subscribe(d=>{this.transitions=d;
      this.ser.resetStatus().subscribe(data=>{this.statuses=data},err=>{})
    },e=>{})
  }
}

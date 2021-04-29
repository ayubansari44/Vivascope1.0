import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription} from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Page1';
  mediaSub: Subscription;
  deviceMd:boolean;
  showModal:boolean;
  constructor(public mediaObserver: MediaObserver){

  }

  ngOnInit(){
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceMd=result.mqAlias==='md' ? true:false;
    })
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}

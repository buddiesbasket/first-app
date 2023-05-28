import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{

  public userData:IUser[] = [] as IUser[];

  constructor(private myService:MyserviceService){}

  ngOnInit(){
    this.myService.getUserData().subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    })
  }
}

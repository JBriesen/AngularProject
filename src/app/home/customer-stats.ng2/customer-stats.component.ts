import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {StatsService} from '../../stats.service'

@Component({
  selector: 'customer-stats-ng2',
  templateUrl: './customer-stats.ng2.component.html'
})

export class CustomerStatsComponentNg2 implements OnInit{
    customerStats:any;

    constructor(private stats:StatsService){
    }

    ngOnInit(){
        this.stats.getCustStats().
            then(custStats => this.customerStats = custStats.data)
            .then(error => console.log(error))
    }
}
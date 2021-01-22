import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    
  }

  
  ngOnInit(): void {
   
    $(document).ready(function(){
	
      $('#maps li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('#maps li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })
    
    })

  }

  heroes=[
    {id:1},
    {id:1},
    {id:1},
    {id:1},
    {id:1},
  ]

}

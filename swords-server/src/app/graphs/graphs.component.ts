import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [0,0,0.5,0,1,0,1], label: 'Crude oil prices' },
  ];

  lineChartData1: ChartDataSets[] = [
    { data: [0,0,1,0,0.5,0,1], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['03.00', '06.00', '09.00', '12.00', '15.00', '18.00','21.00'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';



  constructor() { }

  ngOnInit(): void {
 
    $(document).ready(function(){
	
      $('#graphs li').click(function(){
        var tab_ids = $(this).attr('data-tab');
    
        $('#graphs li').removeClass('current1');
        $('.tab-content1').removeClass('current1');
        $(this).addClass('current1');
        $("#"+tab_ids).addClass('current1');
      })
    
    })

  }

}

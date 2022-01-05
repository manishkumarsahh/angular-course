import { Component } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Max';
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

  
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content:serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }



  //directives deep dive

  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4]
  onlyOdd = false;






}

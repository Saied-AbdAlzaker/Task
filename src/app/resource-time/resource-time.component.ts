import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-resource-time',
  templateUrl: './resource-time.component.html',
  styleUrls: ['./resource-time.component.scss']
})
export class ResourceTimeComponent {

  textOne:string='حدد مواعيد العمل للمورد';
  textTwo:string='تكوين اعدادات الاسبوع الخاص بك هنا . ما عليك سوى تحريك اشرطة التمرير واضافة / ازالة اوقات الراحة لاعداد ساعات العمل';
  btnTextOne:string='اعدادات متقدمة';
  btnTextTwo:string='اعدادات تقليدية';
  startTime:string='وقت البدء';
  EndTime:string='وقت الانتهاء';

  day1:string='السبت'
  day2:string='الاحد'
  day3:string='الاثنين'
  day4:string='الثلاثاء'
  day5:string='الاربعاء'
  day6:string='الخميس'
  day7:string='الجمعة'

  color : ThemePalette = 'primary';
  checked = false;
  disabled = false;

 // Visible input 
  visible1:boolean=true;
  showHideDiv1(e:any){
    if(e.target.checked==true){
      this.visible1=true;
    }else{
      this.visible1=false;
    }
  }

  visible2:boolean=true;
  showHideDiv2(e:any){
    if(e.target.checked==true){
      this.visible2=true;
    }else{
      this.visible2=false;
    }
  }
  visible3:boolean=true;
  showHideDiv3(e:any){
    if(e.target.checked==true){
      this.visible3=true;
    }else{
      this.visible3=false;
    }
  }
  visible4:boolean=true;
  showHideDiv4(e:any){
    if(e.target.checked==true){
      this.visible4=true;
    }else{
      this.visible4=false;
    }
  }
  visible5:boolean=true;
  showHideDiv5(e:any){
    if(e.target.checked==true){
      this.visible5=true;
    }else{
      this.visible5=false;
    }
  }
  visible6:boolean=true;
  showHideDiv6(e:any){
    if(e.target.checked==true){
      this.visible6=true;
    }else{
      this.visible6=false;
    }
  }
  visible7:boolean=true;
  showHideDiv7(e:any){
    if(e.target.checked==true){
      this.visible7=true;
    }else{
      this.visible7=false;
    }
  }

  // Input Add And Remove 1
  inputTime1:any[]=[];
  addInput1(){
    this.inputTime1.push({value:""})
  }

  removeInput1(i:number){
    this.inputTime1.splice(i,1)
  }

    // Input Add And Remove 2
  inputTime2:any[]=[];
  addInput2(){
    this.inputTime2.push({value:""})
  }

  removeInput2(i:number){
    this.inputTime2.splice(i,1)
  }

     // Input Add And Remove 3
     inputTime3:any[]=[];
     addInput3(){
       this.inputTime3.push({value:""})
     }
   
     removeInput3(i:number){
       this.inputTime3.splice(i,1)
     }

        // Input Add And Remove 4
  inputTime4:any[]=[];
  addInput4(){
    this.inputTime4.push({value:""})
  }

  removeInput4(i:number){
    this.inputTime4.splice(i,1)
  }

     // Input Add And Remove 5
     inputTime5:any[]=[];
     addInput5(){
       this.inputTime5.push({value:""})
     }
   
     removeInput5(i:number){
       this.inputTime5.splice(i,1)
     }

        // Input Add And Remove 6
  inputTime6:any[]=[];
  addInput6(){
    this.inputTime6.push({value:""})
  }

  removeInput6(i:number){
    this.inputTime6.splice(i,1)
  }

        // Input Add And Remove 7
  inputTime7:any[]=[];
  addInput7(){
    this.inputTime7.push({value:""})
  }

  removeInput7(i:number){
    this.inputTime7.splice(i,1)
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {

  createResource:string='اضافة موارد جديد'
  saveResource:string='حفظ التغييرات'
  deleteResource:string='حذف المورد';
  nameResource:string='اسم المورد';
  chooseResource:string='اختر نوع الموارد';
  selectOneResource:string='حجز خلال اليوم';
  selectMoreResource:string='حجز مدة(اكثر من يوم)';
  emptyResource:string='المورد متاح الى';
  timeResource:string='وقت المورد';
  timeSevice:string='وقت المورد';
  fixedTime:string='الوقت الثابت';
  min:string='دقيقة';
  selectMore:string='الحجز المتعدد '
  selectOne:string='حجز واحد فقط '
  selectTwo:string='حجز اكثر من شخص لنفس الموعد'
  
  url:string=''

  getImg(event:any){
    // let files = event.target.files;
    console.log(event);
    // Upload Image
    if(event.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any)=>{
        this.url = event.target.result;
      }
    }
  }

  countOption:string[] = ['يوم','شهر','سنة'];

  // Counter
  counter:number=0
  count(value: string) {
    switch (value) {
      case '+':
        this.counter++;
        break;
      case '-':
        this.counter--;
        break;
      default:
        this.counter = 0;
        break;
    }
  }


  visible:boolean=false;
  hideDiv(e:any){
    if(e.target.checked==true){
      this.visible=false;
    }
  }

  showDiv(e:any){
    if(e.target.checked==true){
      this.visible=true;
    }
  }

  visibleTwo:boolean=false;
  hideDivTwo(ev:any){
    if(ev.target.checked==true){
      this.visibleTwo=false;
    }
  }

  showDivTwo(ev:any){
    if(ev.target.checked==true){
      this.visibleTwo=true;
    }
  }

  textInput:string='موعد';

}

function colorGernearator(){
   let colorGenerate= ['0','1','2The  cleaver fox run  beside the jangle. ','3','4','5','6','7','8','9','a','b','c','d','e','f'];
   let color = '#';
   
   for(i=0;i<6;i++){
      let rmnum = Math.round(Math.random()*15);
      let num =colorGenerate[rmnum];
      color += num;
     

       
   }
   document.querySelector('#container').style.background =color;
   document.querySelector('#GenNum').style.color =color;
   document.querySelector('#GenNum').innerHTML =color;
   
}
colorGernearator();

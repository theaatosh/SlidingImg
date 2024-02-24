        let left=document.getElementById("btn1");
        let right=document.getElementById("btn2");
        const slides=document.querySelectorAll('.sli_img');
        const radioBtn=document.querySelectorAll('.radio-btn');
        let counter=0;
        

        const firstPic=(counter)=>{
            slides.forEach((elem,index)=>{
                if(index==counter){
                    elem.style.display='block'
                    radioclick(counter);
                    }
                else
                {
                    elem.style.display='none'
                }
            })
            slideShow();
        }
        //auto image slide huna ko lagi
        const slideShow=()=>{
            setInterval(()=>{
                counter++;
                if(counter>=slides.length)
            {
                counter=0;
            }
                for(i=0;i<slides.length;i++)
            {
                slides[i].style.display='none';
            }
               
                slides[counter].style.display='block';
                radioclick();
            
            },2000)}


            //button haru on click ma slide huna ko lagi function
            const slideOnClick=(c)=>{
            slides.forEach((slide,index)=>{
                if(index==counter){
                    slide.style.display='block';
                }
                else{
                    slide.style.display='none'; 
                }
            })}


            
            //function for swapping radio buttons
            const radioclick=()=>{
                radioBtn.forEach((elem,index)=>{
                    if(counter==index)
                    {   
                        elem.classList.add('slide-radio-btn');
                    }
                    else{
                    
                        elem.classList.remove('slide-radio-btn')
                    }
                })
            }
            left.addEventListener('click',()=>{
                counter--;
                
                if(counter<0)
                {
                    counter=slides.length-1;
                }
                console.log(`left${counter}`);
                slideOnClick();
                radioclick();
            })
            right.addEventListener('click',()=>{
                counter++;
                if(counter>=slides.length)
                {
                    counter=0;
                }
                slideOnClick();
                radioclick();
            })
        
firstPic(counter);
            

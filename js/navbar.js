let isOpen = false;// status of collapse menu false=closed true=open


/*The navOpenClose function is called when the collapse menu icon is clicked.
  This function changes the display properties of the nav list.*/
navOpenClose = () =>{
    
        if(isOpen == false)//if collapse menu icon has not been clicked or is closed
        {
        document.querySelector(".nav-list").style.display = "block";  //displays the nav list
    isOpen = true;
        }
        else{ //if collapse menu icon has been clicked or is open
            document.querySelector(".nav-list").style.display = "none";  //hides the nav list
        isOpen = false;
        }

  }

/* The checkWidth function is called whenever the DOM Window object is resized. 
   This function dynamically changes the display style of the nav list.
*/
  checkWidth = () =>{
    let width = window.innerWidth;
    if(width > 1065)
    {
     document.querySelector(".nav-list").style.display = "flex"; //displays nav list with its default property (flex)
     isOpen = false; //closes the collapse  menu before is disapears. Prevents users double clicking menu icon
    }
    else{
        if(isOpen == false){ // prevents the nav list from closing when resizing at smaller widths
        document.querySelector(".nav-list").style.display = "none";
        }
        else{
            document.querySelector(".nav-list").style.display = "block"; 
        } 
    }
 }//end checkWidth()

 addCollapseControl = () =>{
 document.querySelector(".collapse-icon").onclick = navOpenClose;
 }


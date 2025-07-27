    let counter = document.querySelector("#count");
    let counterBtns = document.querySelector("#countBtn");
    let resetBtn = document.querySelector("#reset");
    
    //if add this code to remove your counter id with number of value showing otherwise not add code
    // let currectCounter = parseInt(counter.textContent) || 0;
    // counter.textContent = currectCounter;

    currectCountNumber = 0;

    let countBtn = (event) => {
        if(event.target.tagName === "BUTTON") {
            
            if (event.target.id === "countPlus") {
                    currectCountNumber++;
                    counter.textContent = currectCountNumber;
            }
            else if(event.target.id === "countMinus") {
                currectCountNumber--;
                counter.textContent = currectCountNumber;
                // counterCountMinus = 0;
            }
            else if(event.target.id === "reset") {
                currectCountNumber = 0;
                counter.textContent = currectCountNumber;
            }    
            else  {
                console.log('something went rong')
            }    
        }
    }
    counterBtns.addEventListener("click", countBtn);
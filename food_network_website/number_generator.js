const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//variables to check if the counters have been activated
let activated = false;

//Now, add a scroll event that normally we see in javascript
window.addEventListener("scroll", () => {
    /* if the page is scrolled to the containers
    element and the counters are not activated*/
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ){
        //select all counters
        counters.forEach(counter => {
            //set counter values to 0
            counter.innerText = 0;
            /*set count variable to
            track the count*/
            let count = 0;

            //update count function
            function updateCount(){
                //get counter target number to count to
                const target = parseInt(counter.dataset.count);
                //as long as the count is below the target number:
                if (count < target) {
                    //increment the count
                    count++;
                    //set the counter text to the count:
                    counter.innerText = count;
                    //repeat this after every 10 milliseconds
                    setTimeout(updateCount, 190);
                } else {
                    //and when the target count is reached:
                    counter.innerText = target;
                }
            }
            //Run the function initially
            updateCount();
            //set activated to true
            activated = true;
        });
        //if the page is scrolled to a certain amount
        } else if(
        pageYoffset < container.offsetTop - container.offsetHeight - 500
        || pageYoffset === 0
        && activated === true
    )
{
    counters.forEach(counter => {
        counter.innerText = 0;
    });
    activated = false
}
});
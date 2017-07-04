export function AnimateLinearly(startValue, endValue, animationTime, callback, extremeEndValue){
    var timeElapsed = 0.0;
    var stepTime = 50;
    if(Math.abs(endValue-startValue) > Math.abs(extremeEndValue-startValue)){
        animationTime = Math.abs(extremeEndValue-startValue)/Math.abs(endValue-startValue)*animationTime;
    }
    var intervalId = setInterval(frame, stepTime);

    function frame(){
        timeElapsed += stepTime;
        let deltaValue = (endValue-startValue)*(timeElapsed)/animationTime;
        //if(Math.abs(deltaValue) >= Math.abs(endValue-startValue)){
        if(timeElapsed >= animationTime){
            clearInterval(intervalId);
        }
        callback(startValue + deltaValue);
    }
}

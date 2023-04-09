
const isSirAvalible = false;
let promiseOfNotes = new Promise(function (resolve, rejected) {
    if(isSirAvalible){
        resolve("Promice and map.pdf ........");
    }else{
        rejected("Sir did not share notes........")
    }
    
});
promiseOfNotes.then(function(success){
    console.log(success, "I got notes let me read it......");
}).catch(function(failure){
    console.log(failure, "are..yar.... kaisa teacher hai ye......");
}).finally(function(){
    console.log("You should always have your notes.......");
});

//using arrow method
promiseOfNotes
.then(success=>console.log(success, "I got notes let me read it......")
).catch(failure=>console.log(failure, "are..yar.... kaisa teacher hai ye......")
).finally( ()=> console.log("You should always have your notes.......")
);

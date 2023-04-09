

function doHomeWork(Callback)
{
    console.log("Doing Home Work.....");
    console.log('finally work is completed');
    Callback();
    function submitHomeWork(){
        console.log("hey we both copid homework...");
        console.log("Let us sumit please....");
    }
    return submitHomeWork;
}

function copyHomeWork()
{
    console.log("Coping home work.....");
    console.log("Thank you , I copied home Work");
}
const submitfunction = doHomeWork(copyHomeWork);
submitfunction();
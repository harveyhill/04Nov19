
function UpdateTime()
{
    let day=new Date();
    document.querySelector("#timestamp").innerHTML = day.toLocaleTimeString();
}
setInterval(UpdateTime,1000);

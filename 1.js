i=1;
h=document.getElementById("d");
function counter(e)
{
    h.innerHTML=i;
    i++;
}
function start()
{
    x=setInterval(counter,1000);
}
function stop()
{
    clearInterval(x);
}
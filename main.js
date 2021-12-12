students=[];
function submit()
{
for(i=1;i<=5;i++)
{
    temp=document.getElementById("ip_"+i).value;
    students.push("<h4>"+temp+"</h4<br>");
}
document.getElementById("output").innerHTML=students;




}

function sort()
{
    students.sort()
    document.getElementById("output").innerHTML=students.join(" ");






}
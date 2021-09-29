function buttontext()
{
    document.getElementById("mailbtn").innerHTML="via E-Mail";
}
function buttontext2()
{
    document.getElementById("mailbtn").innerHTML="Contact Me";
}
var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
window.onload = function(){
	var max = 2160;
	forEach(document.querySelectorAll('.progress'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
		value.querySelector('.value').innerHTML = percent + '%';
	});
}
function infoprint(k,y)
{
    if(k==0)
    {
        if (y==1){
            document.getElementById("nullgrid1").style.background="#00ffd5";           
        }
        else if (y==2){
            document.getElementById("nullgrid2").style.background="#00ffd5";
        }
        else if (y==3){
            document.getElementById("nullgrid3").style.background="#00ffd5";
        }
        else if (y==4){
            document.getElementById("nullgrid4").style.background="#00ffd5";
        }
        else if (y==5){
            document.getElementById("nullgrid5").style.background="#00ffd5";
        }
        else if (y==6){
            document.getElementById("nullgrid6").style.background="#00ffd5";
        }
        else if (y==7){
            document.getElementById("nullgrid7").style.background="#00ffd5";
        }
        else if (y==8){
            document.getElementById("nullgrid8").style.background="#00ffd5";
        }
        else if (y==9){
            document.getElementById("nullgrid9").style.background="#00ffd5";
        }
        else if (y==10){
            document.getElementById("nullgrid10").style.background="#00ffd5";
        }
        else if (y==11){
            document.getElementById("nullgrid11").style.background="#00ffd5";
        }
        else if (y==12){
            document.getElementById("nullgrid12").style.background="#00ffd5";
        }
        else if (y==13){
            document.getElementById("nullgrid13").style.background="#00ffd5";
        }
        else if (y==14){
            document.getElementById("nullgrid14").style.background="#00ffd5";
        }
        else if (y==15){
            document.getElementById("nullgrid15").style.background="#00ffd5";
        }
    }
    else 
    {
        document.getElementById("info").style.visibility="visible";
        if(k==1){
            document.getElementById("info").innerHTML="fhmgvhgvhbnbbnb";
        }
    }
}

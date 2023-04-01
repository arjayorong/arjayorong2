function WeightedAve(){
    var m1 =parseInt(document.getElementById('m1').value);
    var m2 =parseInt(document.getElementById('m2').value);
    var m3 =parseInt(document.getElementById('m3').value);
    var m4 =parseInt(document.getElementById('m4').value);
    var m5 =parseInt(document.getElementById('m5').value);
    var m6 =parseInt(document.getElementById('m6').value);
    var m7 =parseInt(document.getElementById('m7').value);
    var num = m1+m2+m3+m4+m5+m6+m7;
    var num2 = 7;
    var grade = num/num2;

    if(m1>100 || m3>100 || m4>100 || m5>100 || m6>100 || m7>100){
        alert("DOES NOT EXIST")
        return;

    }

    if(grade >= 90 || grade == 100){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "OUTSTANDING");

    }

    else if(grade >= 85){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "VERY SATISFACTORY");

    }

    else if(grade >= 80){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "SATISFACTORY");

    }

    else if(grade >= 80){
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "FAIRLY SATTISFACTORY");

    }

    else {
        alert("Your GWA is: " + grade.toFixed(2) + "\n" + "DID NOT MEET EXPECTIONS");
        
    }

}
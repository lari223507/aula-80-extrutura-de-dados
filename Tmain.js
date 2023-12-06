
nomedosestudantes = [];
    
function submit()
{
    var estudantesnatela = [];

    for (var j = 1; j <= 4; j++) 
    {
        var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;
        console.log(nameOfTheStudent);
        nomedosestudantes.push(nameOfTheStudent);
    }



    var lenghtOfNameOfStudentsArray = nomedosestudantes.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        estudantesnatela.push("<h4>NAME - "+ nomedosestudantes[k] + "</h4>");
        
    }


    document.getElementById("displayNameWithCommas").innerHTML = estudantesnatela;

    var removeCommas = estudantesnatela.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";

}

function sorting()
{
    nomedosestudantes.sort();
    console.log(nomedosestudantes);

    var displayStudentArraySorting = [];

    var lenghtOfNameOfStudentsArray = nomedosestudantes.length;
    console.log(lenghtOfNameOfStudentsArray);

    for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        displayStudentArraySorting.push("<h4>NAME - " + nomedosestudantes[k] + "</h4>");
        console.log(displayStudentArraySorting);
    }

    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}


//Atividade Adicional
function newUpdate()
{
    document.getElementById("displayNameWithoutCommas").innerHTML = "<h1>" + nomedosestudantes +"</h1>";
}






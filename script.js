function addStudent(){
    let name = document.getElementById("name").value;
    let rollno= document.getElementById("roll").value;
    if(name === "" || rollno === ""){
        alert("Please fill in both fields.");
    }
    else{
        document.getElementById("result").innerHTML += "Student details added successfully <br>"+ name + " - " + rollno + "<br>";
    }

}
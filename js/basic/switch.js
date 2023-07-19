let grade;
grade = window.prompt("enter the grade");

switch (grade) {
    case "A":
        console.log("you did great");
        
        break;
    case "F":
        console.log("you failed");
        break;  
    default:
        console.log("is not letter grade");
        break;
}


function calculateGrade() {
    var studentNumber = parseFloat(document.getElementById('studentNumber').value);
    var quiz = parseFloat(document.getElementById('quiz').value);
    var recitation = parseFloat(document.getElementById('recitation').value);
    var longTest = parseFloat(document.getElementById('longTest').value);
    var project = parseFloat(document.getElementById('project').value);
    var attendance = parseFloat(document.getElementById('attendance').value);
    var exam = parseFloat(document.getElementById('exam').value);


    // Score weight or percentage
    var quizWeight = 0.15;
    var recitationWeight = 0.15;
    var longTestWeight = 0.30;
    var projectWeight = 0.40;
    var attendanceWeight = 0.10;

    //Average in every calculation
    var totalGrade =
        (quiz * quizWeight) +
        (recitation * recitationWeight) +
        (longTest * longTestWeight) +
        (project * projectWeight) +
        (attendance * attendanceWeight + exam);

    // Total grades with percentage
    var totalPercentage = (totalGrade / 6) * 6;

    // Conditional statement
    var g
    if (totalPercentage >= 55) {
        g = "Passed"; 
    }
    else if (totalPercentage >= 35) {
        g = "Good";
    } 
    else {
        g = "Failed";
    }

    var m
    switch (g) {
        case "Passed":
            m = "verygood";
            break;
        case "Very Good":
            m = "nice";
            break;
        case "Failed":
            m = "study more";
            break;
    }

    // Display the result
    document.getElementById('result').innerHTML =
        "<p> Student Number: " + studentNumber + "</p>" +
        "<p> Quiz: " + quiz + "%" + "</p>" +
        "<p> Recitation: " + recitation + "%" + "</p>" +
        "<p> Long Test: " + longTest + "%" + "</p>" +
        "<p> Project: " + project + "%" + "</p>" +
        "<p> Attendance: " + attendance + "%" + "</p>" +
        "<p> Exam: " + exam + "%" + "</p>" +
        "<b>Total Grade:</b> " + totalGrade.toFixed(2) + "<br>" + "<br>" +
        "<b>Total Percentage:</b> " + totalPercentage.toFixed(4) + "% (" + g + ") " + m + "";
}


const students = []

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    const marks = [
        parseFloat(document.getElementById('english').value),
        parseFloat(document.getElementById("tamil").value),
        parseFloat(document.getElementById("maths").value),
        parseFloat(document.getElementById("science").value),
        parseFloat(document.getElementById("social").value)
    ];

    const student = {
        name: name,
        marks: marks
    };

    students.push(student);

    document.getElementById('markform').reset();

    calculateTopper();

    displayGrade();
}

function calculateTopper() {
    const subjects = ['English', 'Tamil', 'Maths', 'Science', 'Social'];

    const toppers = subjects.map(() => ({name: '', marks:-1}));

    students.forEach((student) => {
        student.marks.forEach((mark, index) => {
            if(mark > toppers[index].marks) {
                toppers[index].marks = mark
                toppers[index].name = student.name
            }            
        })
    })

    const tbody = document.getElementById('topper-table').querySelector('tbody');
    tbody.innerHTML = "";

    subjects.forEach((subject, index) => {
        const row = document.createElement("tr");
        const subjectCell = document.createElement("td");
        subjectCell.textContent = subject;
        
        const nameCell = document.createElement("td");
        nameCell.textContent = toppers[index].name;

        const markCell = document.createElement('td');
        markCell.textContent = toppers[index].marks;

        row.appendChild(subjectCell);
        row.appendChild(nameCell);
        row.appendChild(markCell);

        tbody.appendChild(row);
    })
}

function displayGrade() {
    const subjects = ['English', 'Tamil', 'Maths', 'Science', 'Social'];
    
    const tbody = document.getElementById('grade-table').querySelector('tbody');
    tbody.innerHTML = "";

    students.forEach((student) => {
        const studentGrade = student.marks.map((mark) => {
            if (mark >= 90 && mark <= 100) return 'O';
            else if (mark >= 80 && mark <= 89) return 'A';
            else if (mark >= 70 && mark <= 79) return 'B';
            else if (mark >= 60 && mark <= 69) return 'C';
            else if (mark >= 50 && mark <= 59) return 'D';
            else return 'E';
        });
        
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        studentGrade.forEach((grade) => {
            const gradeCell = document.createElement('td');
            gradeCell.textContent = grade;
            row.appendChild(gradeCell);
        });

        const resultCell = document.createElement('td');
        const result = studentGrade.includes('E')? 'Fail' : 'Pass';
        resultCell.textContent = result;
        row.appendChild(resultCell);

        tbody.appendChild(row);
    })
}

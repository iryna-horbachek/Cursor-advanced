class Student {
    constructor(course, university, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        // this.marks = [1, 1, 1, 1];
        this.dismiss = false;
    }
    
    getInfo() {
        if(!this.dismiss) {
            return `Студент ${this.course} ${this.university} м.Одеса, ${this.fullName}`;
        } else {
            return 'Цей студент виключений';
        }
    }

    getAverageMark() {
        if(!this.dismiss) {
            const avarageMark = this.marks.reduce((prev, curr) => ((prev + curr))) / this.marks.length;
            return avarageMark;
        } else {
            return null;
        }
    }

    dismissStudent() {
        this.dismiss = true;
        return 'Цей студент виключений'
    }

    recoverStudent() {
        this.dismiss = false;
        return 'Цього студента поновлено';
    }

    get studentMarks() {
        if(!this.dismiss) {
            return this.marks;
        } else {
            return null;
    }
}

    set studentMarks(mark) {
        if(!this.dismiss) {
            const newMark = this.marks.concat(mark);
            return this.marks = newMark;
        } else {
            return 'Цей студент виключений'
        }
    }
}

const studentInfo = new Student('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');
console.log(studentInfo.getInfo());

//геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
//сеттер оцінок 
console.log(studentInfo.studentMarks);
studentInfo.studentMarks = 5;
console.log(studentInfo.studentMarks);

//avarageMark
console.log(studentInfo.getAverageMark());

//dismissStudent
studentInfo.dismissStudent();
console.log(studentInfo.getInfo());
console.log(studentInfo.getAverageMark());
console.log(studentInfo.studentMarks);
studentInfo.studentMarks = 5;
console.log(studentInfo.studentMarks);

//recoverStudent
console.log(studentInfo.recoverStudent());
console.log(studentInfo.getInfo());
// console.log(studentInfo.getAverageMark());
console.log(studentInfo.studentMarks);


class BudgetStudent extends Student {
    constructor(course, university, fullName) {
        super(course, university, fullName);
        setInterval(() => {
            this.getScholarship()
        }, 30000);
    }

    getScholarship() {    
        if(this.getAverageMark() >= 4) {
            console.log(`Ви отримали 1400 грн стипендії`);
        } else if (this.dismiss === true) {
            console.log(`Вас виключено з курсу`);
        }
         else {
            console.log('Ви не можете отримувати стипендію')
        }
    }
}

const otherStudent = new BudgetStudent('1го курсу', 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер');
// otherStudent.dismissStudent();
// console.log(otherStudent.getAverageMark());
otherStudent.getScholarship();




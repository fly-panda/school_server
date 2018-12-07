import { selectGradeConf } from './control/SelectGrade';
import { selectStudentConf } from './control/SelectStudent';
import { selectTeacherConf } from './control/SelectTeacher';
import { selectDepartmentConf } from './control/SelectDepartment';

const formList = {
    selectstudent: selectStudentConf,
    selectgrade: selectGradeConf,
    selectteacher: selectTeacherConf,
    selectdepartment: selectDepartmentConf
};
let list_arr = [];
for (let i in formList) {
  list_arr.push({
    ele: i,
    obj: formList[i]
  });
}
export default list_arr;

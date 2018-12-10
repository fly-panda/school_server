import { inputConf } from "./control/Input";
import { selectConf } from "./control/Select";
import { radioConf } from "./control/Radio";
import { checkBoxConf } from "./control/CheckBox";
// import { cascaderConf } from "./control/Cascader";
import { textConf } from "./control/Text";
import { titleConf } from "./control/Title";
// import { hrConf } from "./control/Hr";
import { pConf } from "./control/P";
import { uploadsConf } from './control/Uploads';
import { datePickerConf } from './control/DatePicker'
import { addressConf } from './control/Address';
import { downloadConf } from './control/download';
import { trueFalseConf } from './control/trueFalse';
import { uploadImgConf } from './control/uploadImg';
import { imgShowConf } from './control/imgShow';
import { imgCheckConf } from './control/imgCheck';
import { selectContactConf } from './control/Select_contact';

const formList = {
//   title: titleConf,
//   hr: hrConf,
 input: inputConf,
 text: textConf,
 p: pConf,

 select: selectConf,
 truefalse: trueFalseConf,

  radio: radioConf,
  checkbox: checkBoxConf,
  uploads: uploadsConf,

  datepicker: datePickerConf,
//   cascader: cascaderConf,
  address: addressConf,
  download: downloadConf,
  uploadimg: uploadImgConf,
  imgshow: imgShowConf,
  imgcheck: imgCheckConf,
  selectcontact: selectContactConf,
};
let list_arr = [];
for (let i in formList) {
  list_arr.push({
    ele: i,
    obj: formList[i]
  });
}
export default list_arr;

import { sliderConf } from './control/slider';
import { scoreConf } from './control/score';

const formList = {
    slider: sliderConf,
    score: scoreConf,
};
let list_arr = [];
for (let i in formList) {
  list_arr.push({
    ele: i,
    obj: formList[i]
  });
}
export default list_arr;

import uploadCustom from '_c/upload';
import uploadList from '_c/uploadList';
import imgShow from '_c/imgShow';
import vueSlider from 'vue-slider-component';
const customForm = {
  uploadCustom,
  vueSlider
};

const install = function(Vue, opts = {}) {
  Vue.component(uploadCustom.name, uploadCustom);
  Vue.component('vueSlider', vueSlider);
  Vue.component('uploadList', uploadList);
  Vue.component('imgShow', imgShow);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(customForm, { install });

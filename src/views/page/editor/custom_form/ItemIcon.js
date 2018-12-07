export default (_self, h) => {
  let icons = [];
  // 删除按钮
  icons.push(h('Icon', {
    style: {
        'font-size': '20px',
        'color': '#FF5A49',
        'margin-bottom': '10px',
        'margin-left': '2px',
        'cursor': 'pointer  '
    },
    props: {
      type: 'md-trash'
    },
    nativeOn: {
      click() {
          console.log(_self.index)
        _self.$emit('handleRemoveEle', _self.index);
      }
    }
  }));
  const item_icon = h('div', {
    style: {
        background: '#fff',
        position: 'absolute',
        width: '23px',
        height: '23px',
        right: '0',
        bottom: '-41px',
        'box-shadow': '3px 3px 3px #e2e2e2'
    },
    class: {
      'delete-icon-form': true
    }
  }, icons);
  return item_icon;
}

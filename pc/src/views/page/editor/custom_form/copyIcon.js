export default (_self, h) => {
  let icons = [];
  // 复制按钮
  icons.push(h('Icon', {
    style: {
        'font-size': '20px',
        'color': '#71B301',
        'margin-bottom': '10px',
        'margin-left': '2px',
        'cursor': 'pointer  '
    },
    props: {
      type: 'md-copy'
    },
    nativeOn: {
      click() {
          console.log(_self.index)
        _self.$emit('handleCopyEle', _self.index);
      }
    }
  }));
  const item_icon = h('div', {
    style: {
        background: '#fff',
        position: 'absolute',
        width: '23px',
        height: '23px',
        right: '30px',
        bottom: '-41px',
        'box-shadow': '3px 3px 3px #e2e2e2'
    },
    class: {
      'copy-icon-form': true
    }
  }, icons);
  return item_icon;
}

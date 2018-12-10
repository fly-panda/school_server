export default (_self, h) => {
  return [
    h('hr', {
      style: {
        'margin-bottom': _self.obj.marginBottom + 'px',
        'margin-top': _self.obj.marginTop + 'px',
      }
    }, _self.obj.label)
  ]
}

export const hrConf = {
    label: '',
  // 是否可配置
  config: true,
  marginTop: 0,
  marginBottom: 24
}

export default (_self, h) => {
  return [
    h('div', {
      style: {
        width: '100%'
      },
      domProps: {
        innerHTML: _self.obj.describe || "文本标签"
      }
    })
  ]
}

export const pConf = {
  config: true,
  type: 'describe',
  describe: '请设置文字内容',
  label: '描述文字',
  marginTop: 0,
  marginBottom: 24,
  fontSize: ''
}

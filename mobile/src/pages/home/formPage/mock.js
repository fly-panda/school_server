exports.data = [{
  "title": "新建表单1",
  "describe": "<p class=\"ql-align-center\">这是我新创建的表单</p>",
  "data": [{
    "ele": "input",
    "obj": {
      "type": "input",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAR1JREFUOBFjYBgFjOhBkJycbA0UO8TIyKgzZ86c6+jy6HwmdAEgPxWIu////w+i4QDIZ8zNzRWFC0AZKC4oKCgQ+Pz580EuLi6zb9++XQHSOpMnT/6Zmppq9e/fv0ygIb+B+mTnzp3rBnThf5AZKC4Aao4BKloH0gSU2w80JBikyNXV9aSsrGwiCwtLF1AjN9CbxiBxEGCBUHAS5GxGoAJXoEHCQLYaEC/btWuXD5CfBtR8Gsj/B6RFgDQYwA1IS0sz//Pnz6d58+bZwiSBBt0EOl/t79+/6UDbG6WkpM4/fvw4AiYPouEGADU7MzExTUOWBLInAm12ZWZmngY0pAOo+QVQ7AAQfwZi6gB4LACd+5QUI4ExIU2K+kGsFgAbpmzU40lHigAAAABJRU5ErkJggg==",
      "config": true,
      "label": "姓名",
      "placeholder": "请输入姓名",
      "inlineBlock": false,
      "require": true,
      "maxLength": 2000,
      "describe": "姓名不能为空？",
      "items": [{
        "label_value": "null",
        "label_name": "222"
      }],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "单行文字"
    }
  }, {
    "ele": "text",
    "obj": {
      "type": "textarea",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAASZJREFUOBFjYBgFhEKAEV1BQ0MD2+PHj+8yMjK2zZkzZzpIPjk5ecP////90dXOmzcPrp8FXfLp06fOQE0PgOKhQAw2CEjPBuK9QIwTMKHL/P37NwDoml6guCjQJUIgeWZm5nNAse3oGFkvikFAlwDVMrqzs7PvAbK3ANk+IMVAw6cD+bfRMbJBKF5LTU01ByoW//nz516gIUL//v27DFS8COiiJqD4TGSN6GwUg4CKA4AK5oI0A9nMQMM2AQOf49mzZ+j6MPgoBgFlA5iYmMKAsXUJpBIYRqeAMegKZCZBLQEJIwN4rMEZyLLo7LS0NElgOHGji8+dO/cOTAzFRUAXpANtZoNJwug/f/7AmOj0ZJgAikFAQ7qAEnwwSSJouEFEqB3xSgAAYH0Ywet6cgAAAABJRU5ErkJggg==",
      "config": true,
      "label": "个人描述",
      "placeholder": "请输入个人描述",
      "inlineBlock": false,
      "maxLength": 2000,
      "describe": "个人描述不能为空？",
      "require": true,
      "maxRows": 5,
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "verify": "none",
      "visibility": true,
      "modalTitle": "多行文字"
    }
  }, {
    "ele": "p",
    "obj": {
      "config": true,
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAALlJREFUOBFjYBjygBHZB8nJyX+Q+Wjshrlz57agiTGwIAswMjK6wfj///9fBmQvAIrtAomxsLDcg8kRRQNd8yAlJSWOkGImQgoIyVNsAEoYoNv2798/pqSkpP/I4sAw+QsMTLg+OANZEYwNVAzSbA8MUAkgvZKZmTkEaOhrmDyIxusFkAFA2w4xMTGdBilmZWU9BeKD2DCA1wCYInw0TgOAzv4N1PgPpBmYBkBe+fvr1y+U8ADJDQMAAOl4MuQjR82EAAAAAElFTkSuQmCC",
      "type": "describe",
      "describe": "个性签名",
      "label": "描述文字",
      "marginTop": 0,
      "marginBottom": 24,
      "fontSize": "",
      "modalTitle": "描述文字"
    }
  }, {
    "ele": "select",
    "obj": {
      "type": "select",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAALVJREFUOBFjYBhowAhzQHJy8hYg2wjGJ0Cfmzt3rg+KGqABz1AE8HCQ1TLhUUeUFMUGsKBbk5aWJvnv3z8pdHEQn4mJ6dmsWbOeI8thGACU/P3///95QKyHrJCRkfESkO+MLAZiY3gBaMMbZmZmZ6gGsHoQGyQGkiNoAEgBsiH4NIPUYrgAJAgCMENw2QxRxcCALQxgcmBD4BwcDJwuwKEeQxjZBeeQUxiGSiQBYAydReIOMBMA89U47l/J/oYAAAAASUVORK5CYII=",
      "config": true,
      "label": "兴趣爱好",
      "placeholder": "最少选择一个",
      "inlineBlock": false,
      "require": true,
      "items": [{
        "name": "篮球",
        "value": "basketball",
        "parent": 0
      },{
        "name": "足球",
        "value": "footerball",
        "parent": 0
      },{
        "name": '游戏',
        "value": "game",
        "parent": 0
      }],
      "value": "",
      "name": "default",
      "ruleError": "请选择",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "下拉框",
      "describe": "请选择兴趣爱好"
    }
  }, {
    "ele": "truefalse",
    "obj": {
      "type": "trueFalse",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAUhJREFUOBFjYBhowAhzQHJy8hYg2wjGJ0Cfmzt3rg+KGqABz1AE8HCQ1bKgq0tJSVGUkZF5+Pz5c43fv3/PBMp7zZs373NmZqbS379//8yaNesRsh4mZA6I/e/fv6mPHz/eBNR8AMhdCtIMtNHs169fJ//8+WMAUoMMMAwQEhIKBSpgZmRkLABqnpGUlOQI5G8H8nOA/E3ImkFsDC/09PR8BYp7giRTU1N9gC5aBNQcM2fOnG0gMXSA4QKYAmBYRAI1LwTyA3BpBqnFcAFIEOjndKDmZiDTXU5O7grQG4eZmJh2/f//XwEYfckgNTCAYUBaWpocMLDKWFlZHWbOnHkNpBBo4AOggU1AQ3JgGmE0hgHQaFKGKQDazguyGag5H0hbAcWnwuRANIYByJIgNigagZQtujiMj2zAOaBTiUqNQJechRkw8DQAfL+AKTjlVDQAAAAASUVORK5CYII=",
      "config": true,
      "label": "是否结婚？",
      "hasOther": false,
      "inlineBlock": false,
      "require": true,
      "value": "",
      "items": [{
        "value": "1",
        "label": "是"
      }, {
        "value": "2",
        "label": "否"
      }],
      "name": "default",
      "ruleError": "请选择",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "是/否",
      "describe": "请选择是否结婚？"
    }
  }, {
    "ele": "radio",
    "obj": {
      "type": "radio",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZpJREFUOBHNUr1OwmAUbetQhQQmE38GVxcGwgPo0NVEH0BjCnwQEgYmE918AQZMo6GNyhO4yQCTO046aowhUUcGSvlpPSfyNUXY9S739t5zzv35qih/bervAYIgUPMw3/cPVVX1p3XiGrZtO8gFUc6MgBBifTKZXAHQjMViTq1W8wgul8t6v9/PIzR0XS9alvXBPE37cYrCziSjw4njOJbruhu5XE6YpplnjNyFpmlnnuddSg79kvzodrsC8QuA9yAdI25CdB9+D76QyWTesUIrnU6vIk51Op1H1JRwBZAe4vG4MR6PN4fD4TNIOgERG2C67UQi8dXr9ZpotMNauAIPxp1Ho5GxgEzsMjBGtVp1+SEtFJAJXH/myjJPD+G5WlRA5bVxqBawgyhxGrNzu1KprESFogINPhUO9QqRwi8RFzmBvd+wv0B8KxuER4Sqime7Q/G0Xq8/ZbPZLe487dYmGf9JCk99jvhgToCJUqm0xncGqZ1MJm15MI7NzoDsQrSIKT8XCjDJSfAnm/BHEkQP4g2I19Hc/4i/AVv7yWs4kNk3AAAAAElFTkSuQmCC",
      "config": true,
      "label": "性别",
      "hasOther": false,
      "inlineBlock": false,
      "require": true,
      "value": "1",
      "items": [{
        "value": "1",
        "label": "男"
      }, {
        "value": "2",
        "label": "女"
      }],
      "name": "default",
      "ruleError": "请选择",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "单选",
      "describe": "请选择性别"
    }
  }, {
    "ele": "checkbox",
    "obj": {
      "type": "checkbox",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQdJREFUOBFjYBhowAhzQEpKyob///97w/i4aKCa/0xMTBvnzJkTClLDAlP4798/fzk5OWYYHxf97Nkz5j9//nyFycMNAAk0NDT8g0ngooFqGB4/fgx3OYoBuDSBxEtKSrjfv3/fC3RBObI6JmQOLjZI87t377YCvc/i4uLyBVkdQQNgmoGa7sydOzf12rVr//EakJqa6gPEViBF6JoZGRlRNIPUYLgAqOjD379/1wMN8QQ5G6gGbDM2zVgNmDVr1hGgRAQwWtcQ0ozVAJDgvHnz9rOzsyuD/IzLZpA6EMDwAkSYgWHatGkvCGkGqYWnA6DibUlJSRiBBDMQRj969IgBlJRh/IGnAWWGbkpr4wTyAAAAAElFTkSuQmCC",
      "config": true,
      "label": "喜欢的食物",
      "hasOther": false,
      "inlineBlock": false,
      "require": false,
      "value": [],
      "items": [{
        "name": "1",
        "value": "大米"
      }, {
        "name": "2",
        "value": "面"
      }],
      "name": "default",
      "ruleError": "该选项不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "多选",
      "describe": "非必填哦"
    }
  }, {
    "ele": "uploads",
    "obj": {
      "type": "uploads",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANZJREFUOBFjYBjUIDk5uTAlJaUWnyOZcUkCNVb///+/GYjtjI2N+c6dO7cbm1pGbIJAm2uA4l6MjIzbgQZwA7ExkH9x3rx5JejqmdAFVq1aBXKVHFCTOxB/AuLv/Pz8fkxMTNwlJSXc6Orx8oEuyU9KSqrHpwjDBfgUY5OjngFAp27GZgM2MaDXtsDE4S4AhrgETJAIGq4WbgARmrAqYcEqihDcwMrKyobgYrKQDeAD+q0RXcmfP38YgOLowrwwAbgBzMzMkf/+/bOESeCjgYkqEp88SXIA9NM8iFkmoEQAAAAASUVORK5CYII=",
      "config": true,
      "action": "http://workflow.test/imageupload",
      "require": true,
      "label": "选择附件",
      "maxSize": 2048,
      "value": [],
      "updateType": "",
      "updateTypeList": [{
        "dKey": "1",
        "dValue": "图片类型"
      }, {
        "dKey": "2",
        "dValue": "excel类型"
      }, {
        "dKey": "3",
        "dValue": "压缩类型"
      }],
      "name": "default",
      "ruleError": "请上传图片",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "文件上传",
      "describe": "请选择附件"
    }
  }, {
    "ele": "datepicker",
    "obj": {
      "type": "datepicker",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAQhJREFUOBFjYBh5wNraej+6r62srBKA4vHo4iA+I7IgUFH3////A6Bi8kD6IbI8IyOjAIgPVPMByN5w9OjRUmR5OBto420Yxw4IYGwY7eTkJA/CID6yWpg8nMYrCVcFYaCrZUGTB3OBXlwDdL42Njmgl64CvRSCLofVID4+vuhPnz6xoSsG8YFyv7CJYzXo+/fvokxMTHzYNADlPgHFn6DLYTXo9+/f1UCFSuiKQXygl+8CqSx0OawGAcMgE10hIT5Wg4CBnQLUKAnTzMrKuvrAgQM3YHxsNFaDgM5/DQwjJpiGP3/+fIOxcdFYDTp27NhGXBpwiaMbtBE9oeHSCBQn2TI8ZtFACgDf+Us6QHVzIwAAAABJRU5ErkJggg==",
      "chooseCheck": ["date", "time"],
      "config": true,
      "label": "出生日期",
      "placeholder": "请选择日期",
      "inlineBlock": false,
      "require": true,
      "name": "default",
      "value": "",
      "ruleError": "选项不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "format": "yyyy年MM月dd日",
      "modalTitle": "时间选择",
      "describe": "请选择出生日期"
    }
  }, {
    "ele": "address",
    "obj": {
      "type": "address",
      "chooseCheck": ["province", "city", "zone", "detail"],
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAbxJREFUOBHFkj9IAnEUx9NT0sEQwgiOsKFcDIWoobGgCFzUkgYdpCWCICpoKnCIpvbGIqLFzHOMSIgiCCrQIgsiohpqDEIk9ezzI37QZU0NPTi/3/fv+97zrqHhj2b6rT8SiaiVSqWDfDvPo8ViOUomk+/f683fA8IPhUKRcrm8Dh00YQLxt4l74AZTDB7OCFar1casVmsM9xb+zvQMOqfwfa/Xmy0UCs+yz7ABE1qq1WrMZrNNggFd1y8pHGb6LrwEjyIyLpsFGgSY0slzze1OGsaZ3JxOpxeIzVB7AM8Sd0ej0SYpYhBAvYPiGwRaKTjjT3sThX6//5jcueDkH0qlUpvgwiyf8PkrkrABu92eKRaLh5yk0XySz+eXiN/zZhTE3Waz+Un2GTZQVfWYFbu4uVFRFA9Tp3O5XBYMOByOeeJDDLlgs1cpUPcdhMPhURr6uHdOFgkUd7PVBtNnU6nUncwZNhBBn8+3AzgR6pdFAmmeAPa+Not4nUAikdCJr7DFVDwed4oixHqBbpfLtSb8r1Z3gkwGg8EY9/bgL/Os8koXuf1K5iXWbSATmqZtwnU2eeHurZ+aZe3/4geIDcJZA8KxZwAAAABJRU5ErkJggg==",
      "config": true,
      "label": "家庭住址",
      "placeholder": "请输入详细地址",
      "inlineBlock": false,
      "require": true,
      "multiple": false,
      "name": "default",
      "value": [],
      "sheng": [],
      "shi": [],
      "qu": [],
      "ruleError": "请选择并输入详细地址",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "details_address": true,
      "modalTitle": "地址",
      "describe": "请填写详细住址哦"
    }
  }, {
    "ele": "download",
    "obj": {
      "type": "download",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPJJREFUOBFjYBjUIDk5OR6I8/E5kgmfJFBO4P///wL41BAyAJ9esNxwNSA9PV0f3fNpaWm6wABlRBeHh0FSUtJmkOSqVauYf//+vRjIz4ApBkZl1N+/f9cUFRVxgMSA/C0wObgBjIyMEiDBsLCwv9zc3M5AZhYQRwHFfYB0HZB27u/v/w5kgwBYLYgBNwDEgYHJkye/ZmFhcQI6mROI+VlZWZ3nzJnzBCaPTGM1AKRg1qxZbzg4OKyABpnOmDHjKbImZDYLEocP6LdGJD7Dz58/wVygOLIwiM0LE4AbwMzMHPnv3z9LmAQ+momJKRKfPElyAMKPQF4Qi7/9AAAAAElFTkSuQmCC",
      "config": true,
      "label": "下载附件查看",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "describe": "请下载",
      "items": [{
        "label_value": "null",
        "label_name": "222"
      },
      {
        "label_value": "null",
        "label_name": "test.doc"
      }],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "文件下载"
    }
  }, {
    "ele": "uploadimg",
    "obj": {
      "type": "uploadimg",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXVJREFUOBHVUr1Kw1AUbtJAUBozGKH4COIL6KQ4iCKSpsmgcXcXUV/AN3BREbSpkKH5GVpxEcWlu4s4qWsKQgnB5bbxu+oJSfUB9EJyzv3O+b577jm3VPr3S6Ab1Gq1LvypNE0ZYb9ZQRAk4FEQBPOFuK7rzxyo1+urhmEsFoIjG8rlsJiLMdM0F4bD4QmqaHChXGzUzarMC5RAHKdM+O/kc2tZVhWV7eUx7hcEPM+7KpfLW6Iobvu+f0vJ6M8kY6wD0QfCyBYEONhqte4g8EgJtm1PgNjB/hCNuyacLO9oYaFBGzjtDOXuapp2HkVRGwlHIPuoZE6SpD7iIZEKFYC0jjHty7I8g1M3e71eF9VchmHYRIOXQLoB+R62+UMARAETWIZZcV33RVXVNYgcoBfHPHkwGIzBXOA7BT7NMb6yh/Q92ycIZCP6Svn8s0qlYidJsgPyK67ToFjWA0VRZuM4riKBYpnFNZjjOAnexhv8fhb4E84HsIyVdJO+3h8AAAAASUVORK5CYII=",
      "lessNum": "2",
      "lessImgRequire": true,
      "config": true,
      "label": "个人头像",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "describe": "请选择个人头像",
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "图片上传"
    }
  }, {
    "ele": "imgshow",
    "obj": {
      "type": "imgshow",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAVFJREFUKBWNUrFKxEAQvU2WFEq08ApLayv/QLsgHIJNQBGFXNIkphCC2ln5BwqRJKCcttp4ktZKaxvb64WkUJJwmMQ3Yo69Qw8Hwsy+mTdvNjusBTNNc62qqiWKp5kkSQpj7C0IgjtmWdZmWZY9AM40UpOr6/ocDTocpDbA/SiKrjzPm03TdEXTtGdd18umWPTdbrdF03EoDdGFUTJJkh7cTBzHr/AHhP1lkphAkw9888DeRdy27UUoHYrYGDEMwz3O+S7GPmmKHMdZKIqij/NLg5EfI0Ktxp0/yVPSdd25PM/7+BmnaBYT1hhvAvJ4li1cPMJYnizLl1mW3YN0hkluxTqKR4qGYWyAdKQoyjLwbSg/wd+AdE2FkzYiYjwN91v3fX+gqmoHSscY72KSQGfkFFqAVSg94En+tQAQoAXY+X6/n+1pAxz+piBiIA2wco9fgkB/4Edt/d4AAAAASUVORK5CYII=",
      "config": true,
      "label": "查看图片",
      "placeholder": "暂无",
      "inlineBlock": false,
      "require": true,
      "describe": "111",
      "gradesType": "add",
      "low": 0,
      "high": 100,
      "step": 1,
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "图片展示"
    }
  }, {
    "ele": "imgcheck",
    "obj": {
      "type": "imgcheck",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAYxJREFUOBHVUr1Kw1AYTdJIpNB0KELfQBCfQB0qDlIRTdpU0Dg5RBC6+fcIPoI6SCgIhTYJBaujbnVwEkRc1C1goQ6huNwknlu9Jbe6ixcu33fPd865P98VhH8/RHYDXdc7yCfiOCYM+y2KoigDf/M8b4ara5r2QoFyubxUKpXmueLIgnEpLCVqxDCMQhRFpzhFjRolaqPp8JRJAwHCNGMi/2A5jZVKJY+T7ScxmnMGjuNcplKpTUmStl3XvWZkvE+OENKG6T3DWOQMKNhsNm9g8MgIpmmqELaxPgL+jmsuIG+x+g8DPNA6dnvAcXcsy0r3+/0LCI8hMPE+a2EYzqITk9VqVaEmnAFEKygeKIoyhV03ut1uB+Jz8J4xW7jWLtZ34Fz5vj/HGQAUscMiQrFer79ms9llmBxCdALRGPJxdGYPHNruHBXTMfxI3719gsGwRV8UgciyvIVr1WByC7MeYhGY1mg0QvqrBiOTyUwHQZBHkUGDCAEBsYc2rqJWwBRVVT2zbTvkiH+2+AT7FqQTulA9TwAAAABJRU5ErkJggg==",
      "config": true,
      "label": "图片选择",
      "placeholder": "",
      "inlineBlock": false,
      "require": false,
      "describe": "不用选择",
      "gradesType": "add",
      "low": 0,
      "high": 100,
      "step": 1,
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "图片选择"
    }
  }, {
    "ele": "selectcontact",
    "obj": {
      "type": "selectcontact",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAGFJREFUOBFjYBjygBHmg+Tk5I1AtjSMT4B+OnfuXH8UNUADzqAI4OEgq2XCow5FKiUlpQGEUQSBHBZ0AVz8OXPmNGCTQzbgKbLTsClGEnuCxKaMORoLqNE4MLFAWRwCdQMAjJUkv+2saCEAAAAASUVORK5CYII=",
      "config": true,
      "label": "选择推荐人",
      "placeholder": "请输入详细地址",
      "inlineBlock": false,
      "require": true,
      "multiple": false,
      "name": "default",
      "value": [],
      "items": [{
        "label_value": "a",
        "label_name": "v"
      }],
      "ruleError": "请选择并输入详细地址",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "details_address": true,
      "modalTitle": "二级下拉"
    }
  }, {
    "ele": "selectstudent",
    "obj": {
      "type": "selectstudent",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAXhJREFUOBFjYBhsgBGXg1JSUtL+//8fB8QsQDWfWVhYGmfNmnUEl3ombBJAQxr+/funycXF5Txv3jwLNja26D9//tQAxR2wqccqVlBQIJCcnHwE6BIU12ZnZwsDxfdj1QQUxHDR58+ftYHixxkZGf8ja5o6depbIJ8dWQyZjWEQKyvrA6ACFWRFIHZaWhorkEJxJbIaDINmzJjxFKjgBzA8/GEKV61axfz3798+IH8BTAydxmpDbm4u39evXxcCvacGDKufQJofqHHJ3Llz69ENgPGZYQwYXVhYyPnly5cOoGZBYMytZmJiOgbEl4BsH2NjY85z586dhqlFpjFcBIyZDUBD1s2ZM2cRssKGhgaW58+fawO9+Ako7gqUn4Usj+IiYLhEAiW5gF7oQlYEYh84cOCfoaGhENBlzkCul4mJyRug6+7B1KEENjA8ojk4OFphkug0UB4Um0ZAWgqIbdDl4Xygt47DOTgYwGSgC1TXiUN6VBhPCAAA/MWHNJoA70cAAAAASUVORK5CYII=",
      "modal": "selectStudentForm",
      "config": true,
      "label": "选择学生",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "maxLength": 2000,
      "describe": "请选择选择学生",
      "items": [{}],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "选择学生"
    }
  }, {
    "ele": "selectgrade",
    "obj": {
      "type": "selectgrade",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAVNJREFUOBHtkr9Kw1AUxps/0AzWwU4ddXOrS30AMSIOkkB8AOkg+AKCtoN/docODm52CyQ4iIMv4RMobsWp1EUhTfwd6YXc9BacxQuHc77zfefLubet1f7ssRbdLIqidpZlF/B14st13V4cx8+L9LaJCIKgicnA87xumqa+ZPA15ismvfTmNsLkiP7UsqwiSZJbNRiGYbcoiim4jvmN6qts2iiC/Mjz3FMiyYJt255QCj93TEZjVBI+263LxCwfsNHnjJO2dlwNAbjSiAGffAd8xKQBnrDNCXmLGFVnBGsbMbSNsEW8we0SHd6jiekmvR3pU7dEJ8PlU93oGOEVgjMM9pWQ+p36EIN7+EsMT8FPipesbYRgiUfdoD8si0r1EE1bdKXeT6kZOY4z4IurCF+qQsG80ytpTXRV3vQ/6iPaw0x+au3wkWUaD1z1XCP+wa9e4BtV5YXEAeODnAAAAABJRU5ErkJggg==",
      "modal": "selectGradeForm",
      "config": true,
      "label": "选择年级",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "maxLength": 2000,
      "describe": "请选择选择年级",
      "items": [{}],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "选择年级"
    }
  }, {
    "ele": "selectteacher",
    "obj": {
      "type": "selectteacher",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAZ5JREFUOBHtUr1Lw3AQbWNIoQilpIhQwT8gEnQuCFZcxKFN0qEoQjdBKOjgaifFQdDFyUnQDqVp6FIEP5biKJJF0EEn0RakHSSI+fD9JL+QpIq7eBDe3bu7l5cjkch//HaBaHggn8/vg8s6jvMW7pE6igDEAWVVVS/pDEsTgpIkzdi2nW40GiIGHX/PnxcKhbRpmqfgJigfEAI5judcUZQFOJtHfp9IJA56vd4ahCfpkmVZG8hNWhMMCKVSqeNOp1OCq2WGYbawMN3v9080TZPIsCzLAoDjef6p2+0SyovvbtRiWbZUq9WeyRScXaGeFQThXdf1Mm4Xg7sjYAsn8FwGHLnyd3CUQV6HyAgwBlEDOAqBRxxYI3PoEfCC8TI3wdu38UmHxAmoWyzvkRaOK8PFqzs2AAEhLPNYaGJ5E4KLWFyCu3XwWWxmRFFsDyi4RPjTdnHknTrC7T8Ui8VrwzAuwLcrlYr9k1DAEYamfCJfO9Vq9QXOdDi7oSL438aQD9GaYNjRnL9Jc47jVpLJ5EculzsDNwzROByu0v4fx09r65t0El1SdQAAAABJRU5ErkJggg==",
      "modal": "selectTeacherForm",
      "config": true,
      "label": "选择老师",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "maxLength": 2000,
      "describe": "请选择选择老师",
      "items": [{}],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "选择老师"
    }
  }, {
    "ele": "selectdepartment",
    "obj": {
      "type": "selectdepartment",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAi9JREFUOBHNkz9oU1EUxvPyoikdMnfIC4IuLlIRKUhFKEJocStkEWnN/z4Qiw4itvAeDlUUFYuh+YuLHTKXNlBHUSpKS+mmg+SPODlkkObZJP6O5j7SEvdeuNxzzved73735MXjOW5L+5+hcrmsVyqV25qmzfQ4r8Ph8MtIJNIe1DNQKJFIjHY6nSwN77rdriWNCNrE47quJ/P5/I7U+tchIcuyhmq1mkXDhNfrnSsUCp/7yclkcqzdbq+AV0KhkA1/X+FeFeDiCiJb5D8hXToqIrxcLrdlGMYYl7TgfpIe1e8K8ZTnFLcDgcAyNx0owtETzEFIuF9x90zhrhBvH6dYbzabO9FodFoR+k+epIHNIrBLfc/n811WuCuEo3PFYnEBwSnAWRo24/H4WUUkvsB+Tz4NZ0K49JxRuDvsWCyWp3iaW1LZbPYLTVMQn/BrfcPJSU6DfYfZrafT6VOO42Tgfy+VSnERc4UkYXhXe7Na5danCB6kUqnzghFv27atM+R50hvM6S6fwVvBZLlCPCVN/oZf7He9Xl/ERZjc5AkfhcglF5nNKwQ2g8Hgw2q1eoLydRytCO7OCNsO+0Oj0ZjE/gMaZhBbklnJRuQRLm8KJhzhSo+IyHIdSWKa5kir1XpBOOT3+29lMpma1AQj/kFsgC+T7oPPS00wWYeE/pX+PmMSB4+5sYgLGaqH3MRhjPwes9lQXHUOFBKQv8MwzfcJr/XIa4gs8XX/6uXH/PgD69oCVFapSNQAAAAASUVORK5CYII=",
      "modal": "selectDepartmentForm",
      "config": true,
      "label": "选择部门",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "maxLength": 2000,
      "describe": "请选择选择部门",
      "items": [{}],
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "选择部门"
    }
  }, {
    "ele": "slider",
    "obj": {
      "type": "slider",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAQhJREFUOBFjYBh5wNraej+6r62srBKA4vHo4iA+I7IgUFH3////A6Bi8kD6IbI8IyOjAIgPVPMByN5w9OjRUmR5OBto420Yxw4IYGwY7eTkJA/CID6yWpg8nMYrCVcFYaCrZUGTB3OBXlwDdL42Njmgl64CvRSCLofVID4+vuhPnz6xoSsG8YFyv7CJYzXo+/fvokxMTHzYNADlPgHFn6DLYTXo9+/f1UCFSuiKQXygl+8CqSx0OawGAcMgE10hIT5Wg4CBnQLUKAnTzMrKuvrAgQM3YHxsNFaDgM5/DQwjJpiGP3/+fIOxcdFYDTp27NhGXBpwiaMbtBE9oeHSCBQn2TI8ZtFACgDf+Us6QHVzIwAAAABJRU5ErkJggg==",
      "config": true,
      "label": "给推荐人打分",
      "placeholder": "",
      "inlineBlock": false,
      "require": true,
      "describe": "",
      "gradesType": "add",
      "low": "10",
      "high": 100,
      "step": 1,
      "verify": "none",
      "value": "",
      "name": "default",
      "ruleError": "该字段不能为空",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "手动填写分数"
    }
  }, {
    "ele": "score",
    "obj": {
      "type": "score",
      "icons": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAjBJREFUOBHNkj1ok2EQx5uY2EQ0dUlcVByEkExBHeoghUIpVIV8EBwCkgaNLRJ0KagUDCjdHOzSEgptpwwhH7ropCAWRJxiEuNWJGKaFPMK4hKT+LuY523TRjfBg3vvvbv//Z977p6hof9NDH9qKB6Pm/L5/AXyZzqdjg2tms3mF6lU6uOgmoFEfr9/lMJ1Cg6hr1EN/yR2zGAwPLNYLLPJZHIbX5d9RD6fb46ieaPReDedTi9R2FHocDh8VNO0RWKTYC7ncrm3KtdHBMl5AM8Bjmaz2Q8KtNd6vd5bYG7a7XZPIpH4IXmjAslM+F9D7/yNRPB08hizWa/XH4gvohMVCoUxurFAsvw7tf/L7G6rKFe/x3+418AOUbvdPku7r1B9JqpILCRyukPFmN87Dh4uFounJCbX6QrBEUg05QcCgXOtVmvG4XDM1mq1axx0nCtNq3zPfms2myPyr18NkipkJxRQTqT9N8xhg9yUx+O5rnJiY7HYMHE7b6sqvk4EyUt0PBQK2SQhkslkVjARtnOFWfzsBnufSqVykd9NHuhnCe1d/xNiNQbed7oAd0skEjnSaDTeE7sPdl1yekfimEymGxiek29G/EESDAYPQ7JG93lFIrgDu8GlUum72+3eAPTI5XJNoMVyubwlGAgOOp3OSyzgKbP5arVap3ky3cco+b6rSUBETmUbCxRchVQwss1j+DKPh3Syiu2TgUQKEY1GzWztNNuzoV8Y7CeV+2f2FyY35jplEZFyAAAAAElFTkSuQmCC",
      "config": true,
      "label": "是否满意",
      "isCheck": false,
      "inlineBlock": false,
      "require": true,
      "value": "",
      "items": [{
        "label_value": "1",
        "label_name": "1分",
        "scoreType": "add"
      }, {
        "label_value": "2",
        "label_name": "0分",
        "scoreType": "mins"
      }],
      "name": "default",
      "ruleError": "请选择",
      "relation": false,
      "relation_name": "",
      "relation_value": "",
      "visibility": true,
      "modalTitle": "勾选打分",
      "describe": "请填写"
    }
  }]
}]

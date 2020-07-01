/*
 * @Author: your name
 * @Date: 2020-07-01 17:26:30
 * @LastEditTime: 2020-07-01 17:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \H5Projects\chromeTest\js\background.js
 */ 
/* 右键菜单演示 */
chrome.contextMenus.create({
    title: "测试右键菜单",
    onClick: function () {
        chrome.notifications.create(null,{
            type: 'basic',
            iconUrl: 'img/icon.png',
            title: '这是标题',
            message: '您刚才点击了自定义右键菜单'
        })
    }
})
chrome.contextMenus.create({
    title: '使用度娘搜索： %s',
    contexts: ['selection'],
    onclick: function (params) { 
        chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd='+encodeURI(params.selectionText)});
     }
})
/* badge演示 */
/* 监听来自content */
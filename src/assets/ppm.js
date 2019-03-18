export default function ppMessage() {
    window.ppSettings = {
      app_uuid: '1462aa48-1d25-11e9-b2c7-00163e0c79f6'
    };
    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = !0;
    a.charset = 'utf-8';
    a.src = 'https://ppmessage.cn/ppcom/assets/pp-library.min.js';
    // a.setAttribute('defer','defer');
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    setTimeout(() => {
        // console.log("document.querySelector('#pp-launcher-button')", document.querySelector(
        // '#pp-launcher-button'))
        if (document.querySelector('#pp-launcher-button')) document.querySelector('#pp-launcher-button').innerHTML =
            '在线客服';
    }, 6500);
}

    // if (!document.getElementById('pp-container')) ppMessage();
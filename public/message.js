window.ppSettings = {
    app_uuid: '1462aa48-1d25-11e9-b2c7-00163e0c79f6'
};
(function () {
    var w = window,
        d = document;

    function l() {
        var a = d.createElement('script');
        a.type = 'text/javascript';
        a.async = !0;
        a.charset = 'utf-8';
        a.src = 'https://ppmessage.cn/ppcom/assets/pp-library.min.js';
        // a.setAttribute('defer','defer');
        var b = d.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
        setTimeout(() => {
            // console.log("document.querySelector('#pp-launcher-button')", document.querySelector(
            //   '#pp-launcher-button'))
            if (document.querySelector('#pp-launcher-button')) document.querySelector('#pp-launcher-button').innerHTML = '在线客服';
        }, 6500);
    }
    l();
})();
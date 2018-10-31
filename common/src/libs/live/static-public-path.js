window.attachPublicPath = function (type) {
    window['_' + type + '_staticPublicPath'] = function () {
        var path = '';
        var suffix = type && type !== '' && type !== 'main' ? type + '/' : '';
        var c =  '/frontend/galaxylaunchpack/';

        switch (window.location.hostname) {
            case 'localhost':
                path = '/';
                break;
            case 'glptraining1.blibli.com':
            case 'glptraining1.gdn-app.com':
                path = '//static-uat1.gdn-app.com' + c;
                break;
            case 'glptraining5.gdn-app.com':
                path = '//static-uat5.gdn-app.com' + c;
                break;
            case 'glpuata.gdn-app.com':
                path = '//static-uata.gdn-app.com' + c;
                break;
            case 'glpuatb.gdn-app.com':
                path = '//static-uatb.gdn-app.com' + c;
                break;
            default:
                path = '//www.static-src.com' + c;
        }
        return path + suffix;
    };
};
window.attachPublicPath('main');

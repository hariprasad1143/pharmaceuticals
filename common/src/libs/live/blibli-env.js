var _blibli_env = '';
switch (window.location.hostname) {
    case 'localhost':
        _blibli_env = 'localhost';
        break;
    case 'glptraining1.blibli.com':
    case 'glptraining1.gdn-app.com':
        _blibli_env = 'uat1';
        break;
    case 'glptraining5.gdn-app.com':
        _blibli_env = 'uat5';
        break;
    case 'glpuata.gdn-app.com':
        _blibli_env = 'uata';
        break;
    case 'glpuatb.gdn-app.com':
        _blibli_env = 'uatb';
        break;
    default:
        _blibli_env = 'production'
}
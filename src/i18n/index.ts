import intl from 'react-intl-universal';

const locales = {
  'en-US': require('./en'),
  'zh-CN': require('./zh')
};

intl.init({
  currentLocale: 'en-US', // TODO: determine locale here
  locales
});

export default intl;

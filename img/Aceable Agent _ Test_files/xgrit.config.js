const getAppList = () => {
  if (['re', 'realestate'].indexOf(window.location.host) !== -1) {
    return ['RE'];
  }
  if (['de', 'dd', 'driving'].indexOf(window.location.host) !== -1) {
    return ['DD', 'DE'];
  }
  return ['DD', 'DE', 'RE'];
};

window.aceConstants = {
  DOMAINCONF: {
    brandId: 'ACE',
    isDev: false,
    AppList: getAppList(),
  },

  ACEAPICONF: {
    env: 'prd',
    title: 'API Production',
    baseUrl: 'https://prd.xgritapi.com/api/1/',
    basicAuth: 'Basic MmM5MjBlOGYxOTI0ZWVjNzgxZWRjMzE1ZjgxZTQzYTE6',
  },

  TOKENS: {
    segment: 'D0qluvpUyWbF4qOzUNUE2XnR6UdmOFEc',
    youtube: 'AIzaSyC-Q-UyucYVuYYnPaUM9-L32oKKq5GKAT8',
    stripe: 'pk_live_PGmQnPRsMfDjXVLxtQlJVNwA',
    facebook: '691302410903494',
    amplitude: 'client-QPs0unaxCXskrAXiVA6SKOY16dJQE7ZQ',
    iterable: {
      DE: 'f56b3726c8d84115a511dfe01029aa1f',
      DD: '7202dfcb5174472d8d829b9e28b48f5a',
      RE: '22fba08dd65c48b19e25706653880893',
      INS: 'f56b3726c8d84115a511dfe01029aa1f',
      MTG: 'f56b3726c8d84115a511dfe01029aa1f'      
    },
    recaptcha: '6LcnfWMjAAAAAI7wMlWYTqnWRTivwx-bmDsmIzQL',
  },
};

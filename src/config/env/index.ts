import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const WICARA_URL = publicRuntimeConfig.wicara_url;
const TERM_URL = publicRuntimeConfig.term_url;
const PRIVACY_POLICI_URL = publicRuntimeConfig.privacy_polici_url;

export { WICARA_URL, TERM_URL, PRIVACY_POLICI_URL };

import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const WICARA_URL = publicRuntimeConfig.wicara_url;

export { WICARA_URL };

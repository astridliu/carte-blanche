const MATCH_LAST_SEMICOLON_REGEX = /;\s*$/;

const convertCodeToMetaData = (code) => (
  JSON.parse(code.replace(MATCH_LAST_SEMICOLON_REGEX, ''))
);

export default convertCodeToMetaData;
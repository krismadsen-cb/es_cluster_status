const config = {
  'base': 'http://',
  'endpoints': ['d5-e01-lmes04', 'd5-e02-lmes01', 'a1-e01-les10'],
  'pollTime': 60000 * 1,
  'query': ':9200/_cat/health?h=status'
}

export default config;

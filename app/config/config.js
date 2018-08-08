const config = {
  'base': 'http://',
  'endpoints': ['d5-e01-lmes04', 'd5-e01-les01', 'd5-e02-lmes01', 'd5-e02-lmes02', 'd5-e02-lmes03', 'd5-e01-lmes05', 'd5-e01-lmes06', 'd5-e02-lmes03', 'd5-e04-lmes01', 'd5-e04-lmes02'],
  'pollTime': 60000 * 5,
  'query': ':9200/_cat/health?h=status'
}

export default config;

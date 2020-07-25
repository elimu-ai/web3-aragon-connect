const { connect } = require('@aragon/connect')
const { Finance } = require('@aragon/connect-finance')

const fetchFinanceTransactions = async () => {
  console.info('fetchFinanceTransactions')

  const finance = new Finance(
    '0x25e71ca07476c2a65c289c7c6bd6910079e119e6', // https://mainnet.aragon.org/#/elimuai/0x25e71ca07476c2a65c289c7c6bd6910079e119e6/
    'https://api.thegraph.com/subgraphs/name/0xgabi/aragon-finance-mainnet',
    true
  )
  console.debug(`fetchFinanceTransactions`, `finance: ${finance}`)

  const transactions = await finance.transactions()
  console.debug(`fetchFinanceTransactions`, `transactions: ${transactions}`)

  return transactions
}

module.exports = fetchFinanceTransactions

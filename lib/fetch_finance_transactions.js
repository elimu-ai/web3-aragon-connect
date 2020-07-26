const { connect } = require('@aragon/connect')
const { Finance } = require('@aragon/connect-finance')

const fetchFinanceTransactions = async () => {
  console.info('fetchFinanceTransactions')

  const APP_ADDRESS = '0x7a2711f547696fff3fc1788b9295c5464e4a7edd' // https://rinkeby.aragon.org/?#/elimuai/0x7a2711f547696fff3fc1788b9295c5464e4a7edd
  const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/0xgabi/aragon-finance-rinkeby'
  // if (mainnet) {
  //   const APP_ADDRESS = '0x25e71ca07476c2a65c289c7c6bd6910079e119e6' // https://mainnet.aragon.org/#/elimuai/0x25e71ca07476c2a65c289c7c6bd6910079e119e6
  //   const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/0xgabi/aragon-finance-mainnet'
  // }
  const finance = new Finance(
    APP_ADDRESS,
    SUBGRAPH_URL,
    true
  )
  console.debug(`fetchFinanceTransactions`, `finance: ${finance}`)

  const transactions = await finance.transactions()
  console.debug(`fetchFinanceTransactions`, `transactions: ${transactions}`)

  return transactions
}

module.exports = fetchFinanceTransactions

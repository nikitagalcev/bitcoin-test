import { Wallet } from '../pages/Wallet';
import { Buy } from '../pages/Buy';
import { Sell } from '../pages/Sell';
import { Bitcoin } from '../pages/Bitcoin';

interface ILink {
  exact: boolean,
  path: string,
  title: string,
  component: React.FC,
  key: string
}

export const routes: ILink[] = [
  {
    exact: true,
    path: '/',
    title: 'default',
    component: Wallet,
    key: 'defaultRoute'
  },
  {
    exact: false,
    path: '/wallet',
    title: 'MY WALLET',
    component: Wallet,
    key: 'walletRoute'
  },
  {
    exact: false,
    path: '/buy',
    title: 'BUY BITCOIN',
    component: Buy,
    key: 'buyBtcRoute'
  },
  {
    exact: false,
    path: '/sell',
    title: 'SELL BITCOIN',
    component: Sell,
    key: 'sellBtcRoute'
  },
  {
    exact: false,
    path: '/bitcoin',
    title: 'BITCOIN PRICE',
    component: Bitcoin,
    key: 'bitcoinRoute'
  },
]


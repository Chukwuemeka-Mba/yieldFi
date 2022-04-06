export const state = {
  navItems: [
    {
      id: '1',
      name: 'Buy Crypto',
      dropItems: [
        {
          id: 1,
          title: 'Bank Deposit',
          description: 'Swift Bank Transfer',
          icon: 'bank.png',
        },
        {
          id: 2,
          title: 'Credit/Debit Card',
          description: 'Buy Crypto Via Card',
          icon: 'card.png',
        },
        {
          id: 3,
          title: 'P2P Trading',
          description: 'Bank Transfer and 100+ options',
          icon: 'trade.png',
        },
        {
          id: 4,
          title: 'Third-party Payment',
          description: 'Simplex, Banxa, Paxos',
          icon: 'people.png',
        },
      ],
    },
    {
      id: '2',
      name: 'Markets',
      dropItems: false,
    },
    {
      id: '3',
      name: 'Trade',
      dropItems: [
        {
          id: 1,
          title: 'Convert',
          description: 'The easiest way to trade',
          icon: 'exchange.jpeg',
        },
        {
          id: 2,
          title: 'Classic',
          description: 'The simple and easy-to-use interface',
          icon: 'diamond.png',
        },
        {
          id: 3,
          title: 'Advanced',
          description: 'Able to customize layout',
          icon: 'fix.png',
        },
        {
          id: 4,
          title: 'Margin',
          description: 'Increase your profits wit leverage',
          icon: 'strategy.jpeg',
        },
        {
          id: 5,
          title: 'P2P',
          description: 'Bank transfer and 100+ options',
          icon: 'handshake.png',
        },
        {
          id: 6,
          title: 'Strategy Trading',
          description: 'Trading made easy, trade like a pro',
          icon: 'doc.png',
        },
        {
          id: 7,
          title: 'Swap Farming',
          description: 'Swap to earn Yield',
          icon: 'mining.jpeg',
        },
        {
          id: 8,
          title: 'Fan Token',
          description: 'Upgrade your fan experience',
          icon: 'ltc.png',
        },
      ],
    },
    {
      id: '4',
      name: 'Derivatives',
      dropItems: [
        {
          id: 1,
          title: 'YieldFi Futures Overview',
          description: 'View our full range of crypto-derivative instruments',
          icon: 'ledger.jpeg',
        },
        {
          id: 2,
          title: 'Responsible Trading',
          description:
            'Learn how you could practice responsible trading with YieldFi Futures',
          icon: 'cash-hand.png',
        },
        {
          id: 3,
          title: 'USDⓈ-M Futures',
          description:
            'Perpetual or Quarterly Contracts settled in USDT or BUSD',
          icon: 'wallet.jpeg',
        },
        {
          id: 4,
          title: 'COIN-M Futures',
          description:
            'Perpetual or Quarterly Contracts settled in Cryptocurrency',
          icon: 'coin.jpeg',
        },
        {
          id: 5,
          title: 'Vanilla Options',
          description: 'Buy and Sell European-style Vanilla Options.',
          icon: 'stars.png',
        },
        {
          id: 6,
          title: 'Leveraged Tokens',
          description: 'Enjoy increased leverage without risk of liquidation',
          icon: 'card3.webp',
        },
        {
          id: 7,
          title: 'Battle',
          description: 'Battle to Win, Long vs Short',
          icon: 'batle.jpeg',
        },
        {
          id: 8,
          title: 'Derivatives Portal',
          description:
            'VIP Exclusive, Tailor-made Institutional Grade Services',
          icon: 'doc2.png',
        },
      ],
    },
    {
      id: '5',
      name: 'Earn',
      dropItems: [
        {
          id: 1,
          title: 'Yield Earn',
          description: 'One-stop Investment Solution',
          icon: 'card2.webp',
        },
        {
          id: 2,
          title: 'Savings',
          description: 'Your Crypto Savings Account',
          icon: 'save.png',
        },
        {
          id: 3,
          title: 'Yield Vault',
          description: 'Earn Multi-Benefits with Yield',
          icon: 'wallet.png',
        },
        {
          id: 4,
          title: 'Liquidity Farming',
          description: 'Add liquidity and earn double',
          icon: 'search.png',
        },
        {
          id: 5,
          title: 'Yield Pool',
          description: 'Mine more rewards by connecting to the pool',
          icon: 'piggy.png',
        },
        {
          id: 6,
          title: 'Launchpad',
          description: 'Token Launch Platform',
          icon: 'rocket.png',
        },
        {
          id: 7,
          title: 'Staking',
          description: 'Easy Stake, Higher',
          icon: 'ledger.webp',
        },
        {
          id: 8,
          title: 'Dual Investment',
          description: 'Commit your crypto holdings and enjoy high returns',
          icon: 'case.png',
        },
        {
          id: 9,
          title: 'Auto-Invest',
          description: 'Accumulate crypto on autopilot',
          icon: 'blockchain.png',
        },
      ],
    },
    {
      id: '6',
      name: 'Finance',
      dropItems: [
        {
          id: 1,
          title: 'Yield Visa Card',
          description: 'Convert and pay with crypto worldwide',
          icon: 'card2.webp',
        },
        {
          id: 2,
          title: 'Crypto Loans',
          description: 'Gen an instant loan secured by crypto assets',
          icon: 'save.png',
        },
        {
          id: 3,
          title: 'Yield Pay',
          description: 'Send and spend Crypto at zero fees',
          icon: 'cash.png',
        },
      ],
    },
    {
      id: '7',
      name: 'NFT',
      dropItems: false,
    },
  ],
  faqs: [
    {
      id: 1,
      question: 'How is MAU calculated?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 2,
      question:
        'What is the difference between Starter, Pro, and Enterprise plans?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 3,
      question: 'What happens if I hit my MAU limit?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 4,
      question: 'How do I purchase higher levels of support?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 5,
      question: 'What other limits do I need to be aware of?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 6,
      question:
        'Is every feature automatically included in the enterprise plan?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
    {
      id: 7,
      question: 'Do the prices listed on the pricing page include tax?',
      answer:
        'Tax is not included in the prices listed on the pricing page. Tax will be included in your billing receipts.',
    },
  ],
}

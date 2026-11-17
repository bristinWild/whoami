**Your privacy leaks before you send a single coin. It leaks the moment you open your wallet.**

Every time you check a balance, a company you've probably never heard of gets a note: this internet address, these wallets, right now. Check every morning and they learn your routine. Own more than one wallet and they learn they're all yours.

Blockchains promised to remove the middleman. For most people there's still one in the middle, quietly answering every question their wallet asks. I spent time researching these middlemen. Here's what I found, in plain words.

## The middleman nobody mentions

A blockchain is a giant shared record book, copied across thousands of computers called nodes. Your wallet app doesn't keep a copy. It's far too big for a phone or a browser.

So your wallet asks someone who has one. That someone is an **RPC provider**. RPC stands for "remote procedure call", which is just a technical way of saying "asking another computer a question". The best-known providers are Infura, which MetaMask uses by default, Alchemy and QuickNode.

Think of a librarian. You can't carry the whole library home, so you ask the librarian for each book you need. It's convenient. But this librarian writes down every book you ask for, who you are, and when you came in.

## What the librarian sees

Every time your wallet asks a question, the provider learns something about you:

- **Where you are.** Your IP address gives away your rough location, your internet provider, and the hours you're online.
- **What you own.** Every balance check shows which wallets you're watching.
- **That your wallets belong together.** When a wallet opens, it checks all your accounts at once, from the same connection ([DeFi Education](https://defieducation.substack.com/p/how-privacy-policies-really-work)). That's like asking the librarian about five different people's bank statements in one breath. They'll assume all five are you.
- **What you're about to do.** When you press send, the provider sees your transaction, including the amount and where it's going, before the rest of the world does.
- **What you use.** Which apps, which tokens, which positions.

The provider doesn't need bad intentions for this to hurt you. Logs can leak, get hacked, or be handed over when a court asks for them.

It isn't only the provider, either. A 2026 study of browser wallets found 23 that let tracking scripts on unrelated websites read your wallet address, without you clicking anything ([arXiv](https://arxiv.org/html/2607.06141v1)).

## This has already happened

None of this is theory. In each case below, the blockchain itself worked perfectly. The middleman was the problem.

- **November 2020: one company's mistake stopped everyone.** Infura was running outdated software, ended up on the wrong version of the chain and went down. MetaMask broke, and Binance paused Ethereum withdrawals ([The Block](https://www.theblock.co/post/84232/ethereum-infrastructure-provider-infura-is-down)).
- **March 2022: a whole country was cut off by accident.** While applying sanctions, Infura blocked too broadly and locked out MetaMask users in Venezuela. Users in Iran, North Korea, Cuba, Syria and occupied parts of Ukraine stayed blocked by their IP address ([Axios](https://www.axios.com/2022/03/04/russia-sanctions-rock-defi-banking-apps)).
- **August 2022: the middleman chose which apps you can use.** A day after US sanctions on Tornado Cash, Infura and Alchemy blocked requests to it, so wallets relying on them lost access ([Crypto Briefing](https://cryptobriefing.com/?p=120537)).
- **November 2022: it went into the privacy policy.** Consensys, the company behind MetaMask and Infura, confirmed that Infura collects your IP and wallet address when you send a transaction through MetaMask's default settings ([The Block](https://www.theblock.co/post/189717/consensys-says-it-collects-ip-addresses-of-metamask-users-via-infura)). It later clarified how long that data is kept ([Biconomy](https://www.biconomy.io/post/metamask-updates-privacy-policy-what-you-need-to-know)). That protection is a promise, not a design.

**Encryption doesn't fully save you.** A 2025 study showed that someone who can only see the timing of your encrypted traffic can match your IP address to your wallet more than 95% of the time ([arXiv](https://arxiv.org/abs/2508.21440)). An earlier study did the same using only the size of the data packets ([Drexel University](https://researchdiscovery.drexel.edu/esploro/outputs/conferenceProceeding/Deanonymizing-Ethereum-Users-behind-Third-Party-RPC/991021898164404721)).

## Your next trade is worth money to someone else

Imagine telling a shop clerk you're about to buy 1,000 shares. Someone overhears, buys first, and sells them back to you at a higher price. In crypto, bots do exactly this when they see a trade before it's processed. It's called front-running.

That makes a trade you haven't finished yet valuable. And there's a market for it:

- **"Protection" services auction your trade.** Private RPCs such as Flashbots Protect, MEV Blocker, Merkle and Blink promise to shield you from bots. In practice, they share your transaction, or hints about it, with professional traders who bid to trade around it. Merkle and Blink keep all the profit unless you register for a refund key ([arXiv](https://arxiv.org/abs/2505.19708)).
- **Wallets sell the right to handle your trades.** "Order flow auctions" are venues where wallets sell the exclusive right to execute their users' transactions ([arXiv](https://pdf.arxiv.org/pdf/2305.19150)).
- **Pending trades are sold as live data.** Once a transaction is broadcast, companies like bloXroute sell real-time feeds of it to traders who want a millisecond head start ([bloXroute](https://bloxroute.com/products/data-streams)).

This is the crypto version of "payment for order flow" on the stock market, where over 90% of US retail orders go to just six trading firms ([Flashbots](https://writings.flashbots.net/illuminate-the-order-flow)). The stock market version at least has best-price rules. Crypto has none.

To be fair: I found no public evidence that Infura or Alchemy sell your transactions. But the whole system is built so that whoever sees your trade first holds something valuable.

## So why does everyone use them?

Because the alternative is keeping the whole library at home.

- **Running your own node is heavy.** A full Ethereum node needs around 1.3 to 1.8 terabytes of fast storage and days to catch up ([Valebyte](https://valebyte.com/en/blog/ethereum-node-hardware-requirements-2026-full-node-and-validator-reality/)). It grows by roughly 50 to 70 gigabytes every week ([Servers.expert](https://servers.expert/en/news/149)).
- **The choice is made for you.** MetaMask uses Infura out of the box. When Infura went down in 2020, analysts noted that most users didn't even know they could switch ([AtoZ Markets](https://atozmarkets.com/?p=106155)).
- **It's free and easy for developers.** Providers offer generous free plans ([Spark](https://www.spark.money/tools/multi-chain-rpc-provider-comparison)), so apps get built around one provider from day one.

The result: a handful of companies, mainly Alchemy, Infura, QuickNode, Ankr, Chainstack and dRPC, sit between most people and networks that were meant to have no one in the middle.

## What's being done about it

There are fixes. Each one solves part of the problem and leaves another part open.

| Fix | What it solves | The catch |
| --- | --- | --- |
| Run your own node | Everything: nobody else sees your questions ([ethereum.org](https://ethereum.org/bs/developers/docs/nodes-and-clients/light-clients)) | Terabytes of storage, so few people do it |
| Switch to another provider | Takes one company out of the picture | A different company now sees the same things |
| Light clients such as [Helios](https://www.github.com/a16z/helios) and the [Nimbus](https://nimbus.team/about/) verified proxy | Checks that the answers you get are true | You still ask a provider, so it still sees your questions |
| Tor or a mixnet | Hides where you are | The provider still sees what you ask for |
| Trusted hardware | The provider's server can't read your questions ([BeInCrypto](https://beincrypto.com/ethereum-privacy-roadmap-buterin)) | You have to trust the chip maker |
| Private information retrieval | The server answers without learning the question | Not yet fast enough for data as big as Ethereum's ([The Defiant](https://thedefiant.io/vitalik-buterin-unveils-roadmap-for-improving-privacy-on-ethereum)) |

The good news is that this is now a priority. The Ethereum Foundation lists "private reads" as a core goal of its privacy roadmap ([The Block](https://www.theblock.co/amp/post/370532/ethereum-foundation-sets-end-to-end-privacy-roadmap-with-private-writes-reads-and-proving)), and its Kohaku wallet toolkit now builds the Helios light client straight into wallets ([Coinlive](https://www.coinlive.com/news-flash/1085724)).

## What I'm building

This research shapes [Solizone](https://www.solizone.co), my project that lets developers write Solidity smart contracts on [Logos](https://logos.co). Solizone apps run inside Basecamp, the Logos desktop app, on your own computer.

Instead of asking a provider, every Solizone app reads from its own copy of the chain, kept on your machine. That copy is rebuilt and checked from Logos itself. So there's no librarian taking notes, nobody who can block an app or a country, and no single company that can go down for everyone.

There's a neat side effect. Your copy downloads every block, the same as everyone else's. Downloading the whole library tells nobody which book you actually read.

It isn't the whole answer. When you send a transaction, it still has to reach the network, so I'm also working on fair ordering: the network commits to the order of transactions before it can see what's inside them. And keeping a full copy light enough for an ordinary laptop is an engineering challenge I'm actively working through.

Logos calls this approach **PriFi**, short for private finance: protecting every step of a transaction, not just the moment money moves. Reading data privately is one of those steps.

## The takeaway

Blockchains made it very hard to cheat when money moves. They did nothing to stop people watching everything around it. Your balance checks, your wallets and your next trade all pass through a middleman first.

If you use a crypto wallet today:

- **Find out who your provider is.** It's usually in your wallet's network settings.
- **Don't open all your wallets in one app** if you'd rather they stay unlinked.
- **Consider running your own node or a light client** if you hold anything significant.
- **Remember that "protection" services see your trades too.** Read what they do with them.

Privacy shouldn't depend on a company's promise. It should come from how the system is built.

---

## Sources

- [The Block: Infura is down, exchanges disable ETH withdrawals](https://www.theblock.co/post/84232/ethereum-infrastructure-provider-infura-is-down)
- [Axios: Russia sanctions rock DeFi banking apps](https://www.axios.com/2022/03/04/russia-sanctions-rock-defi-banking-apps)
- [Crypto Briefing: Infura and Alchemy block Tornado Cash](https://cryptobriefing.com/?p=120537)
- [The Block: ConsenSys collects IP addresses of MetaMask users via Infura](https://www.theblock.co/post/189717/consensys-says-it-collects-ip-addresses-of-metamask-users-via-infura)
- [Biconomy: MetaMask updates privacy policy](https://www.biconomy.io/post/metamask-updates-privacy-policy-what-you-need-to-know)
- [DeFi Education: How privacy policies really work](https://defieducation.substack.com/p/how-privacy-policies-really-work)
- [Time Tells All: Deanonymization of Blockchain RPC Users (arXiv)](https://arxiv.org/abs/2508.21440)
- [Deanonymizing Ethereum Users behind Third-Party RPC Services (Drexel)](https://researchdiscovery.drexel.edu/esploro/outputs/conferenceProceeding/Deanonymizing-Ethereum-Users-behind-Third-Party-RPC/991021898164404721)
- [Privacy Threats of Browser-Extension Wallets (arXiv)](https://arxiv.org/html/2607.06141v1)
- [Private MEV Protection RPCs: Benchmark Study (arXiv)](https://arxiv.org/abs/2505.19708)
- [Order flow auctions (arXiv)](https://pdf.arxiv.org/pdf/2305.19150)
- [bloXroute: Data streams](https://bloxroute.com/products/data-streams)
- [Flashbots: Illuminate the order flow](https://writings.flashbots.net/illuminate-the-order-flow)
- [Valebyte: Ethereum node hardware requirements](https://valebyte.com/en/blog/ethereum-node-hardware-requirements-2026-full-node-and-validator-reality/)
- [Servers.expert: Node server requirements](https://servers.expert/en/news/149)
- [AtoZ Markets: Infura outage](https://atozmarkets.com/?p=106155)
- [Spark: RPC providers compared](https://www.spark.money/tools/multi-chain-rpc-provider-comparison)
- [ethereum.org: Light clients](https://ethereum.org/bs/developers/docs/nodes-and-clients/light-clients)
- [BeInCrypto: Vitalik's privacy roadmap](https://beincrypto.com/ethereum-privacy-roadmap-buterin)
- [The Defiant: Vitalik's privacy roadmap](https://thedefiant.io/vitalik-buterin-unveils-roadmap-for-improving-privacy-on-ethereum)
- [The Block: Ethereum Foundation privacy roadmap](https://www.theblock.co/amp/post/370532/ethereum-foundation-sets-end-to-end-privacy-roadmap-with-private-writes-reads-and-proving)
- [Coinlive: Kohaku integrates Helios](https://www.coinlive.com/news-flash/1085724)
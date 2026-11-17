// All site content lives here. Pages read from this file; edit text here, not in the pages.

export type Link = { label: string; url: string };

export type Project = {
  slug: string;
  name: string;
  /** One line, shown in the project list. */
  tagline: string;
  /** Full description, one string per paragraph. */
  description: string[];
  stack: string[];
  status?: string;
  links: Link[];
};

export type Contribution = {
  repo: string;
  number: number;
  title: string;
  url: string;
  /** "merged" | "open" | "in review" - leave out if unsure. */
  status?: string;
  note?: string;
};

export const data = {
  name: "Bristin Borah",
  title: "Protocol Lead",
  location: "Guwahati, India",
  email: "bristineth@gmail.com",
  github: "https://github.com/bristinWild",
  linkedin: "https://www.linkedin.com/in/bristin-borah-739b63179/",
  twitter: "https://x.com/borah_bristin",
  cratesio: "https://crates.io/users/bristinWild",
  npmjs: "https://www.npmjs.com/~bristinwild",

  /** Shown on the landing page. */
  summary:
    "i do graffiti with a keyboard on blockchains, so nobody can paint over it. i build protocol infrastructure, developer tooling and local-first software, with privacy as the default rather than a setting. smart contracts, Rust, and proofs that say something is true and not a word more.",
  status: "Open to full-time roles and protocol engineering contracts. Guwahati, India - remote.",

  stack: [
    { flag: "--logos", tools: "c++, qtQml, Basecamp, LEZ , logos messaging, logos storage, RLN, zones" },
    { flag: "--evm", tools: "revm, solidity, foundry, hardhat · ethereum, polygon, bnb chain, celo, creditcoin, status network" },
    { flag: "--solana", tools: "rust, anchor, pdas, cpis, spl / token-2022, arcium" },
    { flag: "--backend", tools: "typescript, nestjs, express, axum, tokio, graphql, postgres, mongodb, redis" },
    { flag: "--frontend", tools: "react, next.js, tailwind, ethers.js, web3.js" },
    { flag: "--explored", tools: "algorand, stellar, uniswap, pancakeswap, eigenlayer, dex aggregators, lending protocols" },
    { flag: "--ai", tools: "langchain, n8n, openai, erc-8004, erc-8183" },
  ],

  experience: [
    {
      role: "Protocol Lead (promoted from Fullstack web3 engineer)",
      company: "Wildchain",
      period: "Oct 2022 - present",
      bullets: [
        "Led the Web3 team and architected Wildchain's on-chain side",
        "Worked at the intersection of Agentic AI x Web3 by building the trust layer for Agentic service providers.",
        "Built on-chain auctions for dynamic and composable NFTs, with multi-chain integration.",
        "Worked on Ozon - a liquid staking protocol native to Solana with shared security for off-chain data.",
        "Developed Rust SDKs and validator tooling for consensus validation of off-chain data and restaking security.",
        "Backend and dApp integration with NestJS, Express, GraphQL, MongoDB, PostgreSQL and Redis.",
        "Foundry and Hardhat test suites - unit and invariant - with coverage and CI.",
        "Researched token standards: ERC-8004 for trustless agents, ERC-4337 account abstraction, x402 payments, ERC-998 and ERC-6220 composable NFTs.",
      ],
    },
    {
      role: "Blockchain Developer",
      company: "Idea Usher",
      period: "Jul 2022 - Oct 2022",
      bullets: [
        "Order book and custodial wallet modules for a centralised exchange.",
        "Rust smart contracts for a Solana NFT project.",
        "Integrated DEX aggregators for liquidity (Kyber Network).",
        "NFT marketplace contract, integrated with the backend.",
      ],
    },
    {
      role: "Blockchain Engineer Intern",
      company: "Impactional Games",
      period: "Mar 2022 - Jul 2022",
      bullets: [
        "GameFi work - play-to-earn and escrow-based game contracts.",
        "Researched centralised exchange architecture and DeFi protocol design.",
      ],
    },
    {
      role: "Co-Founder * COO",
      company: "Luster.network",
      period: "Jun 2021 - Jul 2022",
      bullets: [
        "Scaled the company from 0 - $32000 in revenue in 6 months, with 3 full-time employees and 5 contractors.",
        "Built a Web3 learning community and contributed to a proof-of-engagement platform.",
        "Ran workshops and events across colleges and communities.",
        "Operated bootcamps to onboard developers into Web3.",
      ],
    },
  ],

  education: [
    { title: "B.Tech in Computer Science, Assam Downtown University", period: "2018 - 2022" },
    { title: "Certified Blockchain Developer, Blockchain School" },
  ],

  projects: [
    {
      slug: "solizone",
      name: "solizone",
      tagline: "The EVM zone for Logos, built privacy-first",
      description: [
        "Solizone is an EVM execution zone on Logos Bedrock that lets Solidity developers build on a privacy-first network without learning a new language. It has three parts: a REVM-based zone node that publishes its blocks to Bedrock. Zoner (a CLI that works alongside Foundry) for deploying to it, and SoliCamp, an in-app playground for writing, testing and deploying contracts inside Logos Basecamp.",
      ],
      stack: ["logos", "rust", "revm", "solidity", "zone-sdk", "logos bedrock", "logos storage", "logos delivery", "logos basecamp"],
      status: "In active development.",
      links: [
        { label: "solizone website", url: "https://solizone.co" },
        { label: "main repository", url: "https://github.com/bristinWild/solizone" },
        { label: "solicamp repository", url: "https://github.com/bristinWild/solicamp" },
        { label: "zoner repository", url: "https://github.com/bristinWild/zoner" }
      ],
    },
    {
      slug: "tuniq",
      name: "tuniq",
      tagline: "confidential computation on logos lez, proven with risc zero and settled to solana",
      description: [
        "Tuniq runs private predicates on Logos LEZ and proves the result with RISC Zero. The proof settles to Solana, so a program there can act on the answer without ever seeing the underlying data.",
        "It started as a set of research experiments and is now being built out as a standalone layer.",
      ],
      stack: ["logos", "rust", "risc zero", "logos lez", "sBPF", "solana"],
      status: "In active development.",
      links: [
        { label: "main repository", url: "https://github.com/bristinWild/Tuniq" },
        { label: "research experiments", url: "https://github.com/bristinWild/tuniq-experiments" },
      ],
    },
    {
      slug: "forumer",
      name: "forumer",
      tagline: "a private, serverless forum for logos basecamp",
      description: [
        "Forumer is a forum that runs inside Logos Basecamp with no server: posts travel over Logos Delivery, it works offline, and you can post as yourself, under an alias, or anonymously.",
        "Submitted as a solution to Logos Lambda prize LP-0026.",
      ],
      stack: ["logos", "basecamp", "logos delivery"],
      links: [
        { label: "repository", url: "https://github.com/bristinWild/forumer" },
        { label: "lp-0026 submission", url: "https://github.com/logos-co/lambda-prize/pull/179" },
      ],
    },
    {
      slug: "ozon-toolkit",
      name: "ozon-toolkit",
      tagline: "cli, operator slashboard and avs sdk for ozon's restaking protocol",
      description: [
        "ozon-cli lets developers and operators register, manage and interact with Ozon's restaking protocol and AVS infrastructure on Solana.",
        "The operator slashboard monitors operator nodes that get slashed for misbehaving while validating. The AVS SDK is a command-line tool for AVS owners to create, manage and monitor oracle validation tasks.",
      ],
      stack: ["solana", "rust", "anchor",],
      links: [],
    },
    {
      slug: "credgate",
      name: "credgate",
      tagline: "cross-chain credit layer that turns wallet history into verified identity",
      description: [
        "The financial system is being rewritten on-chain. CredGate is a cross-chain credit layer powered by Creditcoin's USC testnet, turning wallet history into a verified identity that any protocol on any chain can trust.",
      ],
      stack: ["creditcoin", "solidity", "creditcoin usc"],
      links: [
        { label: "repository", url: "https://github.com/bristinWild/CredGate" },
        { label: "demo video", url: "https://youtu.be/3tCgcC9Or2k" },
      ],
    },
    {
      slug: "credgate-sdk",
      name: "credgate-sdk",
      tagline: "verify wallet identities and query credit scores from any evm chain",
      description: [
        "Developer SDKs for integrating CredGate's on-chain credit layer: verify wallet identities, query credit scores, and build trust-aware protocols across any EVM chain.",
      ],
      stack: ["typescript", "evm"],
      links: [
        { label: "docs", url: "https://credgate.vercel.app/docs" },
        { label: "npm", url: "https://www.npmjs.com/package/credgate-sdk" },
      ],
    },
    {
      slug: "bruhmarket",
      name: "bruhmarket",
      tagline: "prediction market where ai agents pay for research over x402 and stake usdc",
      description: [
        "Bruh is a prediction market on Arc where AI agents, not humans, do the trading. Each agent holds its own USDC wallet, pays for its own research via x402 micropayments, forms a probability estimate with visible reasoning, and stakes real USDC on its conclusion.",
      ],
      stack: ["arc", "x402", "typescript"],
      links: [
        { label: "repository", url: "https://github.com/bristinWild/bruh" },
        { label: "demo video", url: "https://youtu.be/dYotA4p5f7Y" },
      ],
    },
    {
      slug: "cliper-memory",
      name: "cliper-memory",
      tagline: "repository intelligence - code and git history as structured memories",
      description: [
        "Cliper Memory is a repository intelligence engine that converts source code, Git history, architecture, dependencies and project metadata into structured memories that knowledge graph systems like Cognee can ingest.",
      ],
      stack: ["typescript", "knowledge graphs"],
      links: [
        { label: "repository", url: "https://github.com/bristinWild/cliper-sdk" },
        { label: "demo video", url: "https://youtu.be/oaKzj__pCjs" },
      ],
    },
    {
      slug: "cliper-slack",
      name: "cliper-slack",
      tagline: "explains engineering updates to non-technical teams, live in slack",
      description: [
        "Cliper helps non-technical teams understand engineering updates and project architecture in real time over Slack, without waiting on developers. It works by syncing the dev team's Git activity as it happens.",
      ],
      stack: ["slack", "git", "typescript"],
      links: [
        { label: "repository", url: "https://github.com/bristinWild/Cliper-slack-app" },
        { label: "demo video", url: "https://youtu.be/t5Tn4W4pEno" },
      ],
    },
    {
      slug: "drox",
      name: "drox",
      tagline: "real-world social and travel, held together by token-based commitment",
      description: [
        "Drox is a Web3 social and travel platform that helps people organize and join nearby real-world activities with friends and strangers. Built on the Status Network, it uses token-based commitment and reputation to make participation more reliable.",
      ],
      stack: ["status network"],
      links: [
        { label: "backend", url: "https://github.com/bristinWild/drox-backend" },
        { label: "frontend", url: "https://github.com/bristinWild/Drox" },
      ],
    },
    {
      slug: "predicted-ai",
      name: "predicted-ai",
      tagline: "scores which people are most likely to engage with a product",
      description: [
        "Predicted.ai analyzes product context to generate per-user likelihood scores with insights, helping businesses target high-intent users and acquire them more efficiently.",
      ],
      stack: ["ai"],
      links: [{ label: "repository", url: "https://github.com/bristinWild/predictedAI" }],
    },
  ] satisfies Project[],

  // Pull requests to repositories other people own.
  openSource: [
    {
      repo: "logos-co/lambda-prize",
      number: 14,
      title: "LP-0012: event/log mechanism for LEZ programs",
      url: "https://github.com/logos-co/lambda-prize/pull/14",
      status: "merged",
    },
    {
      repo: "logos-co/lambda-prize",
      number: 56,
      title: "LP-0013: token program mint authorities",
      url: "https://github.com/logos-co/lambda-prize/pull/56",
      status: "merged",
    },
    {
      repo: "logos-co/lambda-prize",
      number: 179,
      title: "LP-0026: Forumer, a private serverless forum for Logos Basecamp",
      url: "https://github.com/logos-co/lambda-prize/pull/179",
      status: "open",
    },
    {
      repo: "logos-co/logos-basecamp",
      number: 514,
      title: "sandbox-safe in-memory image rendering for QML plugins",
      url: "https://github.com/logos-co/logos-basecamp/pull/514",
      status: "merged",
    },
    {
      repo: "logos-co/spel",
      number: 84,
      title: "#[event] macro and IDL event support",
      url: "https://github.com/logos-co/spel/pull/84",
      status: "in review",
    },
    {
      repo: "evice-labs/solizone",
      number: 2,
      title: "third feature phase",
      url: "https://github.com/evice-labs/solizone/pull/2",
    },
    {
      repo: "evice-labs/solizone",
      number: 1,
      title: "second feature phase",
      url: "https://github.com/evice-labs/solizone/pull/1",
    },
    {
      repo: "jzaki/forum-sample-app",
      number: 3,
      title: "release 0.2.3",
      url: "https://github.com/jzaki/forum-sample-app/pull/3",
    },
  ] satisfies Contribution[],

  awards: [
    {
      code: "lp-0012",
      title: "Event/log mechanism, Logos",
      description:
        "A structured event system for LEZ programs: an emit_event() API, atomic event flushing via ProgramOutput.events, a getTransactionReceipt RPC that returns events for successful and failed transactions, a lez-events-decoder CLI, and 215 passing tests across the LEZ workspace.",
      links: [
        { label: "merged pr", url: "https://github.com/logos-co/lambda-prize/pull/14" },
        { label: "fork", url: "https://github.com/bristinWild/logos-execution-zone" },
      ],
    },
    {
      code: "lp-0013",
      title: "Token program authorities, Logos",
      description:
        "A mint authority model for the LEZ Token program: fungible tokens can be created with an authority that mints more supply, rotates control to a new key, or revokes minting for good.",
      links: [
        { label: "merged pr", url: "https://github.com/logos-co/lambda-prize/pull/56" },
        { label: "fork", url: "https://github.com/bristinWild/lez-programs" },
      ],
    },
  ],
};

export function getProject(slug: string): Project | undefined {
  return data.projects.find((p) => p.slug === slug);
}

/** The site's pages, in nav order. */
export const routes = [
  { name: "work", href: "/work" },
  { name: "projects", href: "/projects" },
  { name: "open-source", href: "/open-source" },
  { name: "awards", href: "/awards" },
  { name: "articles", href: "/articles" },
  { name: "stack", href: "/stack" },
] as const;

export type RouteName = (typeof routes)[number]["name"];

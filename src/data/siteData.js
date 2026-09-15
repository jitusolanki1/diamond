// Diamond Exchange Master Data
// Strict compliance: No guaranteed earnings, no fake reviews, no false claims. Single-brand cyan/graphite aesthetic.

export const BRAND_CONFIG = {
  name: "Diamond Exchange",
  shortName: "Diamond Exch",
  officialUrl: "https://diamondexchofficial.com/",
  logoUrl: "https://diamondexchofficial.com/wp-content/uploads/2024/02/Logo.webp",
  heroBannerUrl: "https://diamondexchofficial.com/wp-content/uploads/2024/03/best-online-partner-600-x600.webp",
  whatsappNumber: "+639701138907",
  whatsappUrl:
    "https://wa.me/+639701138907?text=Hi%2C%20I%20want%20to%20get%20my%20Diamond%20Exchange%20ID%20%F0%9F%86%94",
  supportEmail: "support@diamondexchofficial.com",
  operatingHours: "24/7 Dedicated Support",
  licenseNote:
    "Platform operating under international entertainment guidelines. Participation permitted strictly in jurisdictions where online sports exchange & gaming are legally authorized. 18+ only.",
};

export const SPORTS_MARKETS = [
  {
    id: "cricket-1",
    sport: "Cricket",
    emoji: "🏏",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/cricket-1.webp",
    category: "cricket",
    tournament: "ICC World Test Championship",
    match: "India vs Australia",
    status: "LIVE - DAY 3",
    isLive: true,
    score: "IND 284 & 195/4 | AUS 312",
    time: "Live In-Play",
    liquidity: "₹4.8 Cr Market Volume",
    markets: [
      { selection: "India", back: "1.82", lay: "1.84" },
      { selection: "Australia", back: "2.35", lay: "2.40" },
      { selection: "Draw", back: "8.50", lay: "9.20" },
    ],
    featured: true,
  },
  {
    id: "cricket-2",
    sport: "Cricket",
    emoji: "🏏",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/cricket-1.webp",
    category: "cricket",
    tournament: "Indian Premier League 2026",
    match: "Mumbai Indians vs Chennai Super Kings",
    status: "Upcoming",
    isLive: false,
    score: "Match starts at 19:30 IST",
    time: "Today, 19:30 IST",
    liquidity: "₹8.2 Cr Expected Liquidity",
    markets: [
      { selection: "Mumbai Indians", back: "1.91", lay: "1.93" },
      { selection: "Chennai Super Kings", back: "1.94", lay: "1.96" },
    ],
    featured: true,
  },
  {
    id: "football-1",
    sport: "Football",
    emoji: "⚽",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Football-1.webp",
    category: "football",
    tournament: "UEFA Champions League",
    match: "Real Madrid vs Manchester City",
    status: "LIVE - 68'",
    isLive: true,
    score: "Real Madrid 1 - 1 Manchester City",
    time: "2nd Half In-Play",
    liquidity: "₹3.5 Cr Market Volume",
    markets: [
      { selection: "Real Madrid", back: "2.45", lay: "2.52" },
      { selection: "Draw", back: "2.90", lay: "3.05" },
      { selection: "Manchester City", back: "2.80", lay: "2.92" },
    ],
    featured: true,
  },
  {
    id: "tennis-1",
    sport: "Tennis",
    emoji: "🎾",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/diversity.webp",
    category: "tennis",
    tournament: "Wimbledon Championship",
    match: "Carlos Alcaraz vs Jannik Sinner",
    status: "LIVE - Set 3",
    isLive: true,
    score: "6-4, 3-6, 4-3",
    time: "Live On Centre Court",
    liquidity: "₹1.9 Cr Market Volume",
    markets: [
      { selection: "Carlos Alcaraz", back: "1.75", lay: "1.78" },
      { selection: "Jannik Sinner", back: "2.12", lay: "2.18" },
    ],
    featured: true,
  },
  {
    id: "horse-1",
    sport: "Horse Racing",
    emoji: "🐎",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/to.webp",
    category: "horse",
    tournament: "Royal Ascot - Gold Cup",
    match: "King's Stand Stakes (6f)",
    status: "Next Off in 14m",
    isLive: false,
    score: "Runner Count: 14",
    time: "15:45 GMT",
    liquidity: "₹85 Lakhs Matched",
    markets: [
      { selection: "Royal Pegasus (1)", back: "3.25", lay: "3.40" },
      { selection: "Desert Falcon (4)", back: "4.50", lay: "4.80" },
      { selection: "Thunder Spirit (7)", back: "7.00", lay: "7.60" },
    ],
    featured: false,
  },
  {
    id: "football-2",
    sport: "Football",
    emoji: "⚽",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Football-1.webp",
    category: "football",
    tournament: "English Premier League",
    match: "Arsenal vs Liverpool",
    status: "Upcoming",
    isLive: false,
    score: "Emirates Stadium",
    time: "Tomorrow, 21:00 IST",
    liquidity: "₹5.1 Cr Market Volume",
    markets: [
      { selection: "Arsenal", back: "2.10", lay: "2.15" },
      { selection: "Draw", back: "3.40", lay: "3.55" },
      { selection: "Liverpool", back: "3.10", lay: "3.25" },
    ],
    featured: false,
  },
  {
    id: "cricket-3",
    sport: "Cricket",
    emoji: "🏏",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/cricket-1.webp",
    category: "cricket",
    tournament: "T20 International Series",
    match: "England vs South Africa",
    status: "Upcoming",
    isLive: false,
    score: "1st T20I - Lord's",
    time: "Tomorrow, 23:00 IST",
    liquidity: "₹2.4 Cr Market Volume",
    markets: [
      { selection: "England", back: "1.85", lay: "1.88" },
      { selection: "South Africa", back: "1.98", lay: "2.02" },
    ],
    featured: false,
  },
];

export const CASINO_GAMES = [
  {
    id: "game-1",
    name: "Live Teen Patti Premium",
    emoji: "🃏",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    category: "card",
    categoryName: "Indian Classics",
    tag: "High Liquidity",
    dealer: "Live Professional Dealer",
    minLimit: "₹50",
    maxLimit: "₹1,00,000",
    description:
      "Traditional 3-card table broadcast in 4K resolution with real-time card recognition.",
    featured: true,
  },
  {
    id: "game-2",
    name: "Andar Bahar Classic",
    emoji: "🎴",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    category: "card",
    categoryName: "Indian Classics",
    tag: "Fast Settlement",
    dealer: "Live Studio 1",
    minLimit: "₹100",
    maxLimit: "₹2,50,000",
    description:
      "Classic matching card gameplay with side bets and transparent dealt-card tracking.",
    featured: true,
  },
  {
    id: "game-3",
    name: "European Lightning Roulette",
    emoji: "🎡",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    category: "table",
    categoryName: "Table & Wheel",
    tag: "Single Zero",
    dealer: "Automated Precision Wheel",
    minLimit: "₹20",
    maxLimit: "₹5,00,000",
    description:
      "Certified random number European single-zero layout with multi-angle high-speed cameras.",
    featured: true,
  },
  {
    id: "game-4",
    name: "VIP Speed Baccarat",
    emoji: "👑",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    category: "table",
    categoryName: "Table & Wheel",
    tag: "15-Sec Rounds",
    dealer: "VIP Salon Dealer",
    minLimit: "₹200",
    maxLimit: "₹10,00,000",
    description:
      "High-paced Punto Banco rules with complete roadmaps (Big Road, Bead Plate, Cockroach Road).",
    featured: true,
  },
  {
    id: "game-5",
    name: "Dragon Tiger Studio",
    emoji: "🐉",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/diversity.webp",
    category: "card",
    categoryName: "Live Cards",
    tag: "Simple Rules",
    dealer: "Live Dealer Maya",
    minLimit: "₹50",
    maxLimit: "₹1,50,000",
    description:
      "Two-card duel format where highest card wins with tie and suited tie side-bet options.",
    featured: false,
  },
  {
    id: "game-6",
    name: "Diamond Blackjack Multi-Hand",
    emoji: "♠️",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    category: "table",
    categoryName: "Table & Wheel",
    tag: "3:2 Payout",
    dealer: "Live Dealer Alex",
    minLimit: "₹100",
    maxLimit: "₹50,000",
    description:
      "Standard Vegas 8-deck rules, dealer stands on soft 17, with 21+3 and Perfect Pairs options.",
    featured: false,
  },
];

export const PROMOTIONAL_OFFERS = [
  {
    id: "welcome-match",
    title: "Account Activation Welcome Benefit",
    tagline: "Matched bonus on initial account setup",
    bonusHighlight: "Up to ₹5,000 Bonus Credit",
    wageringRequirement: "8x Turnover Requirement",
    validity: "14 Days from issuance",
    minDeposit: "₹500 Minimum Transfer",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/DiamondExch-Bonus-600-x-400-p.jpg",
    description:
      "Available strictly for newly registered and verified users upon first successful account funding. Subject to full verification.",
    terms: [
      "Must be 18 years or older with verified jurisdiction eligibility.",
      "Turnover calculation: 8x the bonus amount on sports markets with minimum odds of 1.70.",
      "Voided, cancelled, or cashed-out bets do not contribute to wagering requirements.",
      "One welcome offer per individual, household, device, and IP address.",
      "Winnings from bonus funds subject to standard withdrawal verification.",
    ],
  },
  {
    id: "sports-booster",
    title: "Weekly Sports Turnover Privilege",
    tagline: "Transparent weekly volume rebate",
    bonusHighlight: "Up to 5% Market Rebate",
    wageringRequirement: "3x Turnover Requirement",
    validity: "7 Days validity cycle",
    minDeposit: "Eligible on active weekly turnover",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/vignette_cricket_guide-1.jpg",
    description:
      "A calculated volume consideration based on settled qualifying exchange volume across Cricket and Football markets.",
    terms: [
      "Calculated automatically every Monday based on previous 7 days settled turnover.",
      "Eligible exclusively on markets settled at or above 1.50 decimal odds.",
      "Maximum rebate cap applies per account per week as per tier limits.",
      "Requires explicit opt-in via account dashboard or support desk.",
    ],
  },
  {
    id: "live-casino-booster",
    title: "Live Casino Weekend Privilege",
    tagline: "Dedicated table games reward",
    bonusHighlight: "Up to 3.5% Net Consideration",
    wageringRequirement: "5x Table Turnover",
    validity: "Weekend (Sat-Sun) sessions",
    minDeposit: "₹1,000 Minimum Table Turnover",
    image: "https://diamondexchofficial.com/wp-content/uploads/2024/03/Casino-1.webp",
    description:
      "Designed for verified table and live card players participating in Teen Patti, Roulette, and Baccarat sessions.",
    terms: [
      "Valid on net settled outcomes across qualifying live dealer studios.",
      "Opposite betting (e.g., simultaneous Player & Banker bets) strictly disqualifies participation.",
      "Subject to responsible gaming session limits and cooling-off rules.",
      "Terms & conditions apply; management reserves right to audit gameplay integrity.",
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Request Verified Diamond ID",
    desc: "Connect directly through our official WhatsApp. Our team assists with generating your unique account identifier immediately.",
    badge: "Instant on WhatsApp",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/account.webp",
  },
  {
    step: "02",
    title: "Complete Age & Security Check",
    desc: "Confirm you are 18+ and legally permitted in your jurisdiction. A verified profile protects your account and ensures smooth withdrawals.",
    badge: "100% Safe & Secure",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/cyber-security.webp",
  },
  {
    step: "03",
    title: "Fast Deposit & Account Funding",
    desc: "Fund your account via UPI, Bank Transfer or instant payment methods. 256-bit encrypted credentials protect all transactions.",
    badge: "Instant Deposit",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/money.webp",
  },
  {
    step: "04",
    title: "Live Match & Exchange Markets",
    desc: "Browse live cricket, football, tennis, and casino tables with clear back and lay odds and live score broadcasting.",
    badge: "Real-Time Odds",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/broadcasting.webp",
  },
  {
    step: "05",
    title: "Instant Withdrawals 24/7",
    desc: "Request settlements back to your bank account with 24/7 dedicated support standing by to resolve any query on WhatsApp.",
    badge: "Direct Support",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/withdraw.webp",
  },
];

export const TRUST_PILLARS = [
  {
    title: "24/7 Human Support",
    desc: "Speak with real support specialists on WhatsApp and live chat around the clock without waiting.",
    highlight: "Direct Contact",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/telephone.webp",
  },
  {
    title: "256-Bit SSL Security",
    desc: "All session traffic, authentication keys, and transaction history are guarded by modern transport layer encryption.",
    highlight: "Encrypted Sessions",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/cyber-security.webp",
  },
  {
    title: "100% Trusted Platform",
    desc: "Honest odds, fair gameplay, verified platform operations and dedicated member assistance.",
    highlight: "Clear Rules",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/trust.webp",
  },
  {
    title: "Instant Withdrawals",
    desc: "Swift payouts directly credited to your verified source account with zero unnecessary delays.",
    highlight: "Fast Payout",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/withdraw.webp",
  },
  {
    title: "Mobile Banking & Fluid UI",
    desc: "Engineered specifically for low-latency smartphone browsers, smooth finger navigation, and rapid market execution.",
    highlight: "Optimized Speed",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/mobile-banking.webp",
  },
  {
    title: "Simple & Fast Process",
    desc: "Get started within 2 minutes. One-click ID generation and easy deposits via UPI, IMPS, and cards.",
    highlight: "Upfront Transparency",
    icon: "https://diamondexchofficial.com/wp-content/uploads/2024/03/process.webp",
  },
];

export const RESPONSIBLE_GAMING_RULES = [
  {
    rule: "Set a Hard Entertainment Budget",
    explanation:
      "Decide the maximum amount you are comfortable spending before opening a session, and never treat gambling as an investment or income strategy.",
  },
  {
    rule: "Never Chase Losses",
    explanation:
      "Attempting to recover previous losses by increasing stake size is the fastest path to emotional distress. Take a mandatory cooling-off break.",
  },
  {
    rule: "Keep Gaming Time-Bound",
    explanation:
      "Use session timers to avoid fatigue. Decision quality declines sharply during prolonged play sessions.",
  },
  {
    rule: "Recognize the House Edge & Variance",
    explanation:
      "Outcomes in sports and casino games involve inherent unpredictability. Mathematical house margins mean long-term gains cannot be guaranteed.",
  },
  {
    rule: "Do Not Play Under Impairment or Stress",
    explanation:
      "Never participate when under the influence of alcohol, emotional distress, or financial anxiety.",
  },
];

export const FAQS = [
  {
    category: "General & ID",
    q: "What is Diamond Exchange and how does it operate?",
    a: "Diamond Exchange is a premium digital sports exchange and live interactive gaming platform. Unlike traditional bookmakers with fixed spreads, an exchange environment allows participants to trade positions (backing and laying) on live sporting events as well as engage in real-time certified casino table games.",
  },
  {
    category: "General & ID",
    q: "What is a Diamond Exchange ID?",
    a: "A Diamond Exchange ID is your unique, verified personal account profile that allows you to authenticate, manage your balance, set responsible gaming limits, and access live sports markets and gaming lobbies securely.",
  },
  {
    category: "General & ID",
    q: "How do I register for an account?",
    a: "You can request registration by clicking 'GET STARTED' or connecting with our verified official WhatsApp support. Our onboarding team assists with age verification (18+), profile creation, and setting up initial security credentials.",
  },
  {
    category: "Legal & Eligibility",
    q: "What is the legal age requirement to participate?",
    a: "Participation is strictly restricted to individuals who are 18 years of age or older (or the applicable legal age of majority in your specific jurisdiction). Underage registration is strictly prohibited and subject to immediate account termination.",
  },
  {
    category: "Legal & Eligibility",
    q: "Is Diamond Exchange legally permitted in my area?",
    a: "Online sports exchange and gaming laws vary substantially across different countries, states, and union territories. It is the sole responsibility of each participant to ensure that online gaming is compliant with their local laws before registering or placing any funds.",
  },
  {
    category: "Safety & Risk",
    q: "Are winnings guaranteed on Diamond Exchange?",
    a: "No. Winnings are never guaranteed. All sports betting and gaming activities carry inherent financial risk and unpredictable outcomes. We strictly repudiate claims of 'fixed matches', '100% win predictions', or 'risk-free profit'. Only wager amounts you can afford to lose as pure entertainment.",
  },
  {
    category: "Safety & Risk",
    q: "Can sports betting be considered a reliable source of income?",
    a: "No. Sports betting and gaming are forms of adult entertainment and should never be treated as employment, investment, financial planning, or a dependable source of income.",
  },
  {
    category: "Account & Payments",
    q: "What information is required for account verification (KYC)?",
    a: "Standard verification may require valid government-issued photographic identification (e.g. Aadhaar, Passport, or Driver's License) confirming your age and identity, along with verification of the funding source belonging in your name.",
  },
  {
    category: "Account & Payments",
    q: "How can I withdraw my balance?",
    a: "Withdrawals can be initiated directly from your account dashboard or by messaging your dedicated account manager via verified support. Withdrawals are processed back to the verified payment method registered under your personal name.",
  },
  {
    category: "Account & Payments",
    q: "What should I do if I suspect unauthorized activity on my account?",
    a: "Immediately notify our 24/7 support desk via WhatsApp or email. Our security team will temporarily freeze the account, invalidate active sessions, and assist you in resetting your authentication credentials.",
  },
  {
    category: "Promotions",
    q: "How do promotional offers and bonuses work?",
    a: "Every promotional offer features specific qualifying terms, including minimum deposit amounts, turnover multiples (wagering requirements), eligible market odds, and expiration windows. Review the promotional terms tab before claiming any offer.",
  },
  {
    category: "Responsible Gaming",
    q: "How can I set a betting budget or deposit limit?",
    a: "You can define daily, weekly, or monthly deposit ceilings by requesting your account manager or adjusting your limits in the account settings. Once reached, further deposits are restricted until the cycle resets.",
  },
  {
    category: "Responsible Gaming",
    q: "How can I take a break or self-exclude?",
    a: "We provide temporary cooling-off periods (from 24 hours to 30 days) and permanent self-exclusion options. Once requested, your account cannot be reopened until the designated period elapses, preventing impulsive decisions.",
  },
  {
    category: "Sports & Markets",
    q: "What sports markets are available on Diamond Exchange?",
    a: "We feature extensive coverage of International & Domestic Cricket (IPL, ICC tournaments, Test matches, BBL), Football (Premier League, UEFA Champions League, La Liga, ISL), Grand Slam Tennis, Horse Racing, and other major sports.",
  },
  {
    category: "Sports & Markets",
    q: "What is the difference between 'Back' and 'Lay' in an exchange?",
    a: "'Backing' means betting that a specific outcome will occur (e.g., India will win). 'Laying' means betting that the outcome will NOT occur (acting as the layer). This exchange dynamic offers greater flexibility and competitive market odds.",
  },
  {
    category: "Technical & Support",
    q: "How do I reach customer support if I face an issue?",
    a: "Our verified customer support is available 24/7 via the floating WhatsApp button in the corner, live chat on the site, or by emailing support@diamondexchofficial.com.",
  },
];

export const BLOG_ARTICLES = [
  {
    id: "complete-beginners-guide",
    title: "Diamond Exchange: Complete Beginner's Guide to Sports Markets",
    category: "Guides & Basics",
    readTime: "7 min read",
    date: "September 2026",
    summary:
      "A transparent walkthrough of how modern sports exchanges operate, how account IDs work, and the essential principles of responsible participation.",
    content: `
### Understanding the Sports Exchange Model
Unlike a conventional sportsbook where players wager against the house at predetermined margins, a sports exchange functions as a peer-to-peer marketplace. In an exchange, participants either 'back' an outcome (betting it will happen) or 'lay' an outcome (betting it will not happen).

### Key Elements of a Sports Exchange
1. **Backing vs Laying**: Backing gives you a traditional position. Laying lets you offer odds to other market participants.
2. **True Market Odds**: Because odds reflect direct supply and demand between participants, exchanges often offer more competitive pricing with lower underlying platform commission.
3. **Market Liquidity**: Liquidity represents the volume of available matching funds at given odds. Major international cricket matches frequently see millions in active liquidity.

### Account Safety and Prudence
Before entering any sports market, define your entertainment boundaries. Never allocate money needed for living expenses, rent, or essential savings. Gaming must remain strictly discretionary leisure.
    `,
  },
  {
    id: "how-sports-betting-odds-work",
    title: "How Sports Betting Odds Work: Decimal, Probability & Margins",
    category: "Educational",
    readTime: "6 min read",
    date: "September 2026",
    summary:
      "Demystify decimal odds, learn how to calculate implied probability, and understand how bookmaker and exchange margins function.",
    content: `
### Decimal Odds Explained
Decimal odds are the most transparent and intuitive format used across global sports exchanges. The number represents the total return you receive for every 1 unit staked, including your original stake.

* **Formula**: Total Return = Stake × Decimal Odds
* **Profit**: Profit = (Stake × Decimal Odds) - Stake

### Calculating Implied Probability
Every set of odds translates to a mathematical implied probability:
* **Implied Probability (%)** = (1 / Decimal Odds) × 100

For example, decimal odds of **2.00** equate to:
(1 / 2.00) × 100 = **50% implied chance**.
Decimal odds of **1.50** equate to:
(1 / 1.50) × 100 = **66.67% implied chance**.

### The Overround and Commission
In traditional bookmaking, the sum of all implied probabilities exceeds 100% (the 'overround' or house edge). In an exchange, you trade directly at market rates with a transparent commission charged only on net winning positions.
    `,
  },
  {
    id: "cricket-betting-basics",
    title: "Cricket Betting Basics: Match Winner, Sessions & Overs",
    category: "Cricket",
    readTime: "8 min read",
    date: "September 2026",
    summary:
      "An overview of cricket exchange dynamics, from pre-match outrights to in-play session runs, toss markets, and bowler matchups.",
    content: `
### The Nuance of Cricket Markets
Cricket is unique in global sports due to its variable formats (Test match multi-day strategy, 50-over ODIs, and high-intensity 20-over T20 matches).

### Common Cricket Exchange Markets
1. **Match Odds**: Predicting the overall winner. In Test cricket, this includes the Draw outcome.
2. **Session / Fancy Markets**: Wagers on runs scored within specific blocks (e.g., first 6 overs powerplay, 10 overs, or 20 overs).
3. **Top Batsman / Bowler**: Predicting which individual player will record the highest run aggregate or wicket tally in an innings.
4. **Toss Outcome**: A binary 50/50 proposition before the match commences.

### Weather and Pitch Variables
Pitch degradation, humidity, dew factor under floodlights, and overhead cloud cover can shift in-play probabilities dramatically within a matter of overs.
    `,
  },
  {
    id: "responsible-gaming-budget",
    title:
      "Why You Should Never Chase Losses: The Psychology of Bankroll Safety",
    category: "Player Protection",
    readTime: "9 min read",
    date: "September 2026",
    summary:
      "Explore the cognitive biases that lead players to increase stakes after a loss, and practical strategies to safeguard your finances.",
    content: `
### The Trap of the 'Gambler's Fallacy'
The Gambler's Fallacy is the mistaken belief that past independent events influence future probabilities. If a coin lands on heads five times consecutively, the chance of tails on the sixth flip remains exactly 50%. In sports and card games, random variance has no memory.

### The Danger of Chasing Losses
When individuals experience an unexpected loss, emotional frustration often triggers the urge to 'win it back quickly' by doubling or tripling stake sizes. This behavior rapidly compounds losses and can lead to financial distress.

### Golden Rules of Bankroll Discipline
1. **The 2% Unit Rule**: Never risk more than 1% to 2% of your pre-allocated monthly entertainment bankroll on any single market.
2. **Fixed Stop-Loss**: If you hit your daily threshold, close the platform immediately.
3. **Mandatory Cooling Off**: Take at least a 24-hour break between sessions.
    `,
  },
];

export const TERMS_SECTIONS = [
  {
    id: "s1",
    num: "1",
    title: "Introduction",
    content:
      "These Terms and Conditions govern your access to and use of the Diamond Exchange platform, associated domains, interfaces, and customer communication channels. By accessing the service, you confirm that you have read, understood, and agreed to be bound by these provisions. This document represents a general website terms framework; users and operators must obtain review by a qualified lawyer for the jurisdictions in which the service operates.",
  },
  {
    id: "s2",
    num: "2",
    title: "Eligibility",
    content:
      "Participation is permitted solely to individuals who have attained the legal age of majority in their applicable jurisdiction, and in no circumstance under 18 years of age. You warrant that all information provided during registration is accurate, current, and verifiable.",
  },
  {
    id: "s3",
    num: "3",
    title: "Legal Jurisdiction",
    content:
      "The availability of this service does not constitute an offer or solicitation in any jurisdiction in which such activities are prohibited by law. You are solely responsible for ensuring your participation strictly complies with all local, state, and federal statutes applicable in your territory.",
  },
  {
    id: "s4",
    num: "4",
    title: "Account Registration",
    content:
      "Accounts are issued on an individual basis. Users are restricted to one verified account profile. Creating multiple or duplicate profiles, whether using different identifiers, aliases, or family member credentials, is strictly prohibited and grounds for immediate closure.",
  },
  {
    id: "s5",
    num: "5",
    title: "Identity Verification (KYC)",
    content:
      "Diamond Exchange reserves the right to request proof of identity, age, and residence (including government-issued photo ID, proof of address, and ownership of payment instruments) at any stage, including prior to processing deposits or withdrawals.",
  },
  {
    id: "s6",
    num: "6",
    title: "Account Security",
    content:
      "You are solely responsible for maintaining the confidentiality of your credentials, passwords, and two-factor authentication methods. Any activity occurring under your authenticated profile will be deemed authorized by you unless prior written notice of compromise was delivered to customer support.",
  },
  {
    id: "s7",
    num: "7",
    title: "Deposits",
    content:
      "Deposits must originate from accounts, cards, or digital payment mechanisms held in the registered user's legal name. Third-party deposits are strictly rejected. Funds deposited must not be derived from illegal, fraudulent, or unauthorized activities.",
  },
  {
    id: "s8",
    num: "8",
    title: "Withdrawals",
    content:
      "Withdrawal requests are processed back to the verified payment channel registered in the user's name following standard compliance checks. Processing intervals depend on the selected banking method and successful completion of KYC verifications.",
  },
  {
    id: "s9",
    num: "9",
    title: "Promotions",
    content:
      "All promotional campaigns, rebates, matched credits, and bonuses are discretionary and subject to specific campaign terms published on the platform. Promotions may be modified, limited, or withdrawn at management's discretion.",
  },
  {
    id: "s10",
    num: "10",
    title: "Bonus Conditions & Rollover",
    content:
      "Bonus funds require fulfillment of stated rollover (wagering turnover) requirements on qualifying markets before associated balances can be withdrawn. Any attempt to abuse bonus schemes through collusive or opposite-betting tactics voids all bonus balances.",
  },
  {
    id: "s11",
    num: "11",
    title: "Betting & Gaming Rules",
    content:
      "All exchange wagers and gaming rounds are governed by official sport-specific settlement rules and certified game engine rules. In the event of abandoned, postponed, or disputed sporting events, settlements follow recognized industry governing body results.",
  },
  {
    id: "s12",
    num: "12",
    title: "Prohibited Activities",
    content:
      "Users may not engage in automated bot usage, latency arbitrage, syndicate play, match-fixing, chip dumping, harassment of customer support personnel, or exploitation of software vulnerabilities. Violations result in immediate termination.",
  },
  {
    id: "s13",
    num: "13",
    title: "Responsible Gaming",
    content:
      "We provide players with tools to manage their gaming activity, including deposit limits, reality checks, session timers, and self-exclusion periods. Users experiencing gambling-related harm are urged to seek guidance from recognized support organizations.",
  },
  {
    id: "s14",
    num: "14",
    title: "Account Suspension & Termination",
    content:
      "Management reserves the right to suspend or terminate any account found in breach of these terms, involved in suspicious financial activity, or failing required identity verifications, subject to applicable legal guidelines.",
  },
  {
    id: "s15",
    num: "15",
    title: "Fraud Prevention & AML",
    content:
      "We adhere to rigorous Anti-Money Laundering (AML) standards. All transactions are monitored for irregular velocity, structured funding, or suspicious routing, and may be reported to regulatory bodies where required by law.",
  },
  {
    id: "s16",
    num: "16",
    title: "Technical Issues & Force Majeure",
    content:
      "We strive for maximum system uptime but do not warrant uninterrupted or error-free access. We are not liable for telecommunication outages, internet disconnections, server lags, or force majeure occurrences beyond reasonable platform control.",
  },
  {
    id: "s17",
    num: "17",
    title: "Intellectual Property",
    content:
      "All trademarks, visual logos, software code, graphic elements, and editorial materials published on this website are the proprietary intellectual property of Diamond Exchange or its licensed partners and may not be reproduced without written authorization.",
  },
  {
    id: "s18",
    num: "18",
    title: "Privacy & Data Protection",
    content:
      "User personal and technical data is processed strictly in accordance with our Privacy Policy. We do not sell personal data to unauthorized third-party commercial marketing aggregators.",
  },
  {
    id: "s19",
    num: "19",
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by applicable law, Diamond Exchange and its affiliates shall not be liable for any direct, indirect, incidental, or consequential losses arising from participation in sports markets, casino gaming, or platform downtime.",
  },
  {
    id: "s20",
    num: "20",
    title: "Dispute Resolution",
    content:
      "In the event of any disagreement regarding a transaction or market settlement, the participant must submit a written inquiry to customer support within 7 days of settlement. Management will conduct a transparent audit of transaction logs.",
  },
  {
    id: "s21",
    num: "21",
    title: "Changes to Terms",
    content:
      "We may update these terms periodically to reflect regulatory adjustments, platform enhancements, or compliance amendments. Continued use of the platform following published changes constitutes acceptance of the updated terms.",
  },
  {
    id: "s22",
    num: "22",
    title: "Contact Information",
    content:
      "For inquiries regarding these Terms and Conditions or regulatory compliance, contact our official support desk via email at support@diamondexchofficial.com or via official verified customer communication channels.",
  },
];

import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CtaSection } from "../components/CtaSection";
import {
  AlertCircle,
  ArrowRight,
  Banknote,
  Calculator,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Landmark,
  Receipt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

type QuickOverviewItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type NavItem = {
  name: string;
  id: string;
};

type InfoCard = {
  title: string;
  items: string[];
};


type FAQItem = {
  question: string;
  answer: string;
};

type ExchangeRate = {
  currency: string;
  rate: string;
};

export default function CurrencyPage() {
  return (
    <>
      <Header />

      <main className="currency-page">
        {/* Hero */}
        <section className="currency-hero">
          <div className="currency-hero-bg" aria-hidden="true" />
          <div className="container">
            <div className="currency-hero-grid">
              <div className="currency-hero-content">
                <div className="currency-eyebrow">
                  <Sparkles aria-hidden />
                  <span>Bhutan Money Guide</span>
                </div>

                <h1 className="currency-hero-title">
                  Currency, payments, and money tips for travelling in Bhutan.
                </h1>

                <p className="currency-hero-description">
                  Understand Bhutanese Ngultrum, Indian Rupees, cash usage,
                  cards, ATMs, tipping, digital payments, and how to prepare your
                  travel money before arrival.
                </p>

                <div className="currency-hero-actions">
                  <Link href="/contact" className="currency-btn-primary">
                    Ask Our Team
                    <ArrowRight aria-hidden />
                  </Link>
                  <Link href="/cultural-tours" className="currency-btn-secondary">
                    View Bhutan Tours
                  </Link>
                </div>

                <div className="currency-hero-trust">
                  {heroTrust.map((item) => (
                    <div key={item} className="currency-hero-trust-item">
                      <CheckCircle aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="currency-hero-card">
                <div className="currency-hero-card-icon">
                  <WalletCards aria-hidden />
                </div>
                <p className="currency-hero-card-kicker">Quick Money Tip</p>
                <h2>Carry both card and cash.</h2>
                <p>
                  Cards work in many major hotels and shops, but cash is still
                  important for small purchases, tips, markets, rural areas, and
                  unexpected situations.
                </p>
                <div className="currency-hero-card-pills">
                  <span>BTN Cash</span>
                  <span>Visa / Mastercard</span>
                  <span>Backup USD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="currency-quick">
          <div className="container">
            <div className="currency-section-header currency-section-header-center">
              <span className="currency-section-line" />
              <span className="currency-section-label">Quick Overview</span>
              <span className="currency-section-line" />
            </div>

            <h2 className="currency-center-title">
              The essentials before you travel.
            </h2>

            <div className="currency-quick-grid">
              {quickOverview.map((item) => (
                <div key={item.label} className="currency-quick-item">
                  <div className="currency-quick-icon">
                    <item.icon aria-hidden />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="currency-main">
          <div className="container">
            <div className="currency-layout">
              {/* Sidebar */}
              <aside className="currency-sidebar" aria-label="Currency page navigation">
                <div className="currency-sidebar-card">
                  <div className="currency-sidebar-header">
                    <p>Payment Guide</p>
                    <h2>On This Page</h2>
                  </div>

                  <nav className="currency-sidebar-nav">
                    {navItems.map((item) => (
                      <a key={item.id} href={`#${item.id}`} className="currency-sidebar-link">
                        <span>{item.name}</span>
                        <ChevronRight aria-hidden />
                      </a>
                    ))}
                  </nav>

                  <div className="currency-sidebar-help">
                    <div className="currency-sidebar-help-icon">
                      <ShieldCheck aria-hidden />
                    </div>
                    <h3>Need payment clarity?</h3>
                    <p>
                      We can explain package inclusions, accepted payment
                      options, deposit timing, and final balance arrangements.
                    </p>
                    <Link href="/contact">
                      Contact our team
                      <ArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Content */}
              <div className="currency-content">
                {/* Bhutanese Currency */}
                <section id="currency" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Banknote aria-hidden />
                    </div>
                    <div>
                      <p>Official money in Bhutan</p>
                      <h2>Bhutanese Currency</h2>
                    </div>
                  </div>

                  <div className="currency-notice">
                    <CheckCircle aria-hidden />
                    <p>
                      <strong>Official Currency:</strong> Bhutanese Ngultrum
                      (BTN), commonly written as <strong>Nu.</strong>
                    </p>
                  </div>

                  <div className="currency-info-grid">
                    {banknoteInfo.map((card) => (
                      <article key={card.title} className="currency-info-card">
                        <h3>{card.title}</h3>
                        <ul>
                          {card.items.map((item) => (
                            <li key={item}>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>

                  <div className="currency-soft-note">
                    <AlertCircle aria-hidden />
                    <p>
                      Bhutanese Ngultrum (BTN) is pegged to the Indian Rupee at 1:1,
                      and Indian rupee (INR) is also accepted.
                    </p>
                  </div>
                </section>

                {/* Crypto / Binance Pay */}
                <section id="crypto-payments" className="currency-section-card currency-feature-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Smartphone aria-hidden />
                    </div>
                    <div>
                      <p>Digital and alternative payments</p>
                      <h2>Crypto & Binance Pay</h2>
                    </div>
                  </div>

                  <p className="currency-text">
                    Some tourism-facing businesses may accept crypto or Binance
                    Pay, especially in more developed visitor areas. However,
                    acceptance is not universal and can change, so it should be
                    confirmed before relying on it as your main payment method.
                  </p>

                  <div className="currency-feature-grid">
                    <article className="currency-feature-item">
                      <h3>Where it may be available</h3>
                      <ul>
                        <li>Selected hotels</li>
                        <li>Some handicraft or souvenir shops</li>
                        <li>Tourism-facing businesses in larger towns</li>
                        <li>Merchants that display a supported QR payment option</li>
                      </ul>
                    </article>

                    <article className="currency-feature-item">
                      <h3>Before you use it</h3>
                      <ul>
                        <li>Confirm with the merchant first</li>
                        <li>Check network, wallet, and exchange fees</li>
                        <li>Keep cash or card as backup</li>
                        <li>Do not rely on crypto for remote areas</li>
                      </ul>
                    </article>
                  </div>

                  <div className="currency-steps">
                    <h3>Suggested approach</h3>
                    <div className="currency-steps-grid">
                      {cryptoSteps.map((step) => (
                        <div key={step.number} className="currency-step">
                          <div>{step.number}</div>
                          <p>{step.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="currency-warning-note">
                    <AlertCircle aria-hidden />
                    <p>
                      <strong>Important:</strong> Availability of Binance Pay or
                      crypto payment options should be verified directly before
                      travel. Carry a regular payment backup.
                    </p>
                  </div>
                </section>

                {/* Indian Rupee */}
                <section id="indian-rupee" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <DollarSign aria-hidden />
                    </div>
                    <div>
                      <p>Using INR during your visit</p>
                      <h2>Indian Rupee in Bhutan</h2>
                    </div>
                  </div>

                  <p className="currency-text">
                    Indian Rupees are commonly accepted in many places because of
                    the 1:1 currency peg, but travelers should still carry
                    Bhutanese Ngultrum for smoother day-to-day spending.
                  </p>

                  <ul className="currency-check-list">
                    {indianRupeeRules.map((rule) => (
                      <li key={rule}>
                        <CheckCircle aria-hidden />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Payment Methods */}
                <section id="payment-methods" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <CreditCard aria-hidden />
                    </div>
                    <div>
                      <p>Cards, cash, and bank access</p>
                      <h2>Payment Methods</h2>
                    </div>
                  </div>

                  <div className="currency-card-badges">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Cash</span>
                    <span>Bank Transfer</span>
                  </div>

                  <div className="currency-warning-note">
                    <AlertCircle aria-hidden />
                    <p>
                      Cards are useful in major hotels, larger shops, and some
                      restaurants in Thimphu and Paro. Smaller establishments and
                      remote areas may operate mainly with cash.
                    </p>
                  </div>

                  <div className="currency-subsection">
                    <h3>ATMs & Bank Branches</h3>
                    <ul className="currency-check-list">
                      {atmInfo.map((info) => (
                        <li key={info}>
                          <CheckCircle aria-hidden />
                          <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Digital Payments */}
                <section id="digital-payments" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Smartphone aria-hidden />
                    </div>
                    <div>
                      <p>Local apps and online payment options</p>
                      <h2>Digital & Mobile Payments</h2>
                    </div>
                  </div>

                  <div className="currency-feature-grid">
                    <article className="currency-feature-item">
                      <h3>Local payment ecosystem</h3>
                      <ul>
                        <li>mBoB</li>
                        <li>DrukPNB mobile banking</li>
                        <li>Local bank QR payments</li>
                        <li>Selected merchant payment apps</li>
                      </ul>
                    </article>

                    <article className="currency-feature-item">
                      <h3>For international travelers</h3>
                      <ul>
                        <li>Bank transfer for tour payments</li>
                        <li>Card payments where accepted</li>
                        <li>Cash for daily spending</li>
                        <li>Alternative payment options only if confirmed</li>
                      </ul>
                    </article>
                  </div>

                  <div className="currency-success-note">
                    <CheckCircle aria-hidden />
                    <p>
                      Most tour payments are usually arranged before arrival.
                      We will clearly explain available payment methods before
                      confirmation.
                    </p>
                  </div>
                </section>

                {/* Cash & Tipping */}
                <section id="cash" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Wallet aria-hidden />
                    </div>
                    <div>
                      <p>Daily spending and gratuities</p>
                      <h2>Cash & Tipping Guidelines</h2>
                    </div>
                  </div>

                  <div className="currency-subsection">
                    <h3>Cash Recommendations</h3>
                    <ul className="currency-check-list">
                      {cashRecommendations.map((rec) => (
                        <li key={rec}>
                          <CheckCircle aria-hidden />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="currency-subsection">
                    <h3>Tipping Etiquette</h3>
                    <p className="currency-text">
                      Tipping is appreciated but not mandatory. These are common
                      planning ranges only and can be adjusted based on service.
                    </p>

                  
                  </div>
                </section>

                {/* Money Saving Tips */}
                <section id="tips" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Receipt aria-hidden />
                    </div>
                    <div>
                      <p>Practical ways to manage spending</p>
                      <h2>Money Saving Tips</h2>
                    </div>
                  </div>

                  <div className="currency-tips-list">
                    {moneySavingTips.map((tip) => (
                      <div key={tip} className="currency-tip-item">
                        <CheckCircle aria-hidden />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faq" className="currency-section-card">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <AlertCircle aria-hidden />
                    </div>
                    <div>
                      <p>Quick answers for travelers</p>
                      <h2>Frequently Asked Questions</h2>
                    </div>
                  </div>

                  <div className="currency-faq-list">
                    {currencyFaqs.map((faq) => (
                      <article key={faq.question} className="currency-faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Currency Converter */}
                <section id="converter" className="currency-section-card currency-converter">
                  <div className="currency-card-header">
                    <div className="currency-card-icon">
                      <Calculator aria-hidden />
                    </div>
                    <div>
                      <p>Indicative only</p>
                      <h2>Quick Currency Reference</h2>
                    </div>
                  </div>

                  <p className="currency-text">
                    Exchange rates change frequently. Use the table below only
                    as a layout reference and update the numbers before
                    publishing.
                  </p>

                  <div className="currency-converter-grid">
                    {exchangeRates.map((rate) => (
                      <div key={rate.currency} className="currency-converter-item">
                        <span>{rate.currency}</span>
                        <strong>{rate.rate}</strong>
                      </div>
                    ))}
                  </div>

                  <p className="currency-converter-note">
                    Check with banks, official exchange counters, or your payment
                    provider for current rates.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="currency-cta">
          <div className="container">
            <div className="currency-cta-card">
              <div>
                <p className="currency-cta-kicker">Plan payments clearly</p>
                <h2>Ready to plan your Bhutan journey?</h2>
                <p>
                  We will help you understand package inclusions, deposit terms,
                  balance payment timing, cash needs, and the best way to prepare
                  your travel money.
                </p>
              </div>

              <div className="currency-cta-actions">
                <Link href="/contact" className="currency-btn-primary">
                  Contact Our Team
                  <ArrowRight aria-hidden />
                </Link>
                <Link href="/bhutan-tours" className="currency-btn-secondary">
                  Browse Tours
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

const heroTrust = [
  "Cash and card planning",
  "Clear payment guidance",
  "Traveler-friendly money tips",
];

const quickOverview: QuickOverviewItem[] = [
  {
    icon: Banknote,
    label: "Official Currency",
    value: "Bhutanese Ngultrum (BTN)",
  },
  {
    icon: Landmark,
    label: "INR Peg",
    value: "BTN and INR are linked 1:1",
  },
  {
    icon: CreditCard,
    label: "Cards",
    value: "Useful in major towns",
  },
  {
    icon: Clock,
    label: "Banking",
    value: "Usually weekday business hours",
  },
];

const navItems: NavItem[] = [
  { name: "Bhutanese Currency", id: "currency" },
  { name: "Crypto Payments", id: "crypto-payments" },
  { name: "Indian Rupee", id: "indian-rupee" },
  { name: "Payment Methods", id: "payment-methods" },
  { name: "Digital Payments", id: "digital-payments" },
  { name: "Cash & Tipping", id: "cash" },
  { name: "Money Saving Tips", id: "tips" },
  { name: "FAQs", id: "faq" },
  { name: "Currency Reference", id: "converter" },
];

const banknoteInfo: InfoCard[] = [
  {
    title: "Common Banknotes",
    items: ["Nu. 5", "Nu. 10", "Nu. 20", "Nu. 50", "Nu. 100", "Nu. 500", "Nu. 1000"],
  },
  
];

const cryptoSteps = [
  { number: "01", text: "Confirm the merchant accepts your payment method." },
  { number: "02", text: "Check fees, exchange rate, and network requirements." },
  { number: "03", text: "Keep cash or card as a backup before completing payment." },
];

const indianRupeeRules = [
  "INR is commonly accepted in many shops and towns, but BTN is smoother for daily use.",
  "Change may be given in Bhutanese Ngultrum.",
  "Some denominations or damaged notes may not be accepted.",
  "Use official banks or authorized counters for larger currency exchange.",
];

const atmInfo = [
  "ATMs are available in major towns such as Thimphu, Paro, Punakha, and Phuentsholing.",
  "International card access can vary by machine and bank network.",
  "Withdrawal limits and fees may apply.",
  "Carry backup cash because ATMs can be unavailable or run out of cash.",
];

const cashRecommendations = [
  "Carry enough Ngultrum for small purchases, tips, snacks, and personal expenses.",
  "Keep smaller denominations for markets, cafés, taxis, and rural stops.",
  "Use official banks or authorized money changers for exchange.",
  "Carry some emergency cash separately from your main wallet.",
  "Avoid relying only on cards outside Thimphu and Paro.",
];



const moneySavingTips = [
  "Exchange money at banks or official counters instead of informal sources.",
  "Withdraw fewer larger amounts to reduce repeated ATM fees.",
  "Carry cash for rural areas instead of relying on card acceptance.",
  "Eat at selected local restaurants for authentic and budget-friendly meals.",
  "Travel in shoulder seasons for better hotel availability and value.",
  "Confirm what is included in your tour package before arrival.",
];

const currencyFaqs: FAQItem[] = [
  {
    question: "Can I use foreign currency directly in Bhutan?",
    answer:
      "Some hotels or larger shops may accept foreign currency, but exchange rates may not be favorable. It is usually better to use Bhutanese Ngultrum for local spending.",
  },
  {
    question: "Should I exchange money before arriving?",
    answer:
      "It is not always necessary. You can exchange money at the airport or banks in major towns, but carrying some backup cash is wise.",
  },
  {
    question: "Are credit cards widely accepted?",
    answer:
      "Cards are useful in Thimphu and Paro, especially at larger hotels and shops. In smaller towns and rural areas, cash is still preferred.",
  },
  {
    question: "Can I use Indian Rupees for everything?",
    answer:
      "No. INR is commonly accepted in many day-to-day situations, but Bhutanese Ngultrum is still the safest option for smooth local payments.",
  },
  {
    question: "Can I rely on Binance Pay or crypto payments?",
    answer:
      "No, not as your only option. Some businesses may support it, but acceptance can change. Confirm directly before travel and keep cash or card backup.",
  },
];

const exchangeRates: ExchangeRate[] = [
  { currency: "1 USD", rate: "approximately Nu 95" },
  { currency: "1 EUR", rate: "approximately Nu 108" },
  { currency: "1 GBP", rate: "approximately Nu 125" },
  { currency: "1 AUD", rate: "approximately Nu 65" },
  { currency: "1 CAD", rate: "approximately Nu 66" },
  { currency: "100 JPY", rate: "approximately Nu 59" },
  { currency: "1 CNY", rate: "approximately Nu 14" },
  { currency: "1 SGD", rate: "approximately Nu 73" },
  { currency: "1 RUB", rate: "approximately Nu 1.5" },
  { currency: "1 THB", rate: "approximately Nu 2.85" },
  { currency: "1000 VND", rate: "approximately Nu 3.6" },
  { currency: "1 AED", rate: "approximately Nu 26" },
];

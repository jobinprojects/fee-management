import React from 'react';
import './Faq.css'

const FAQ = () => {
  return (
    <div className="container">
      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="accordion">
        <dl>
          <dt>
            <a className="accordionTitle" href="#">
              How To pay fees?
            </a>
          </dt>
          <dd className="accordionItem animateOut accordionItemCollapsed">
            <p>
              Select College fees or school fees --&gt; add your personal
              details--&gt;select your campus, college, type of fees--&gt;
              select payment method --&gt;make payment of said amount. You can
              see detail presentation by clicking{' '}
              <a
                href="https://bharatividyapeethfees.com/howtopay.html"
                style={{ textDecoration: 'none' }}
              >
                <button type="submit">
                  <a
                    href="https://bharatividyapeethfees.com/howtopay.html"
                    style={{ textDecoration: 'none' }}
                  >
                    how to pay?
                  </a>
                </button>
              </a>
            </p>
          </dd>

          <dt>
            <a href="#" className="accordionTitle">
              What are the payment options available on portal?
            </a>
          </dt>
          <dd className="accordionItem accordionItemCollapsed">
            <p>Following payment options are available to you</p>
            <ul>
              <li>Net Banking</li>
              <li>Debit Card</li>
              <li>Credit Card</li>
              <li>NEFT/ RTGS</li>
              <li>Wallets</li>
            </ul>
          </dd>

          <dt>
            <a href="#" className="accordionTitle">
              How to get receipt?
            </a>
          </dt>
          <dd className="accordionItem accordionItemCollapsed">
            <p>
              After successful transaction of fee payment, an email confirmation
              with payment receipt is sent to the registered email id.
            </p>
            <p>You can also view your receipt on view payment history tab</p>
            <p>
              For college fees{' '}
              <a
                href="https://www.bharatividyapeethfees.com/college/payment_history"
                style={{ textDecoration: 'none' }}
              >
                <button type="submit">
                  <a
                    href="https://www.bharatividyapeethfees.com/college/payment_history"
                    style={{ textDecoration: 'none' }}
                  >
                    Click
                  </a>
                </button>
              </a>
            </p>
            <p>
              For school fees{' '}
              <a
                href="https://www.bharatividyapeethfees.com/school/payment_history"
                style={{ textDecoration: 'none' }}
              >
                <button type="submit">
                  <a
                    href="https://www.bharatividyapeethfees.com/school/payment_history"
                    style={{ textDecoration: 'none' }}
                  >
                    Click
                  </a>
                </button>
              </a>
            </p>
          </dd>

          <dt>
            <a href="#" className="accordionTitle">
              Whom should I contact if I need help?
            </a>
          </dt>
          <dd className="accordionItem accordionItemCollapsed">
            <p>
              You can send us an email on{' '}
              <a href="support@bharatividyapeethfees.com" style={{ textDecoration: 'none' }}>
                <button type="submit">
                  <a href="support@bharatividyapeethfees.com" style={{ textDecoration: 'none' }}>
                    Click
                  </a>
                </button>
              </a>
            </p>
          </dd>

          <dt>
            <a href="#" className="accordionTitle">
              I have paid my fees, but I could not see my receipt and amount got debited from my bank account?
            </a>
          </dt>
          <dd className="accordionItem animateOut accordionItemCollapsed">
            <p>Go to the portal and check payment history</p>
            <p>
              For college fees{' '}
              <a
                href="https://www.bharatividyapeethfees.com/college/payment_history"
                style={{ textDecoration: 'none' }}
              >
                <button type="submit">
                  <a
                    href="https://www.bharatividyapeethfees.com/college/payment_history"
                    style={{ textDecoration: 'none' }}
                  >
                    Click
                  </a>
                </button>
              </a>
            </p>
            <p>
              For school fees{' '}
              <a
                href="https://www.bharatividyapeethfees.com/school/payment_history"
                style={{ textDecoration: 'none' }}
              >
                <button type="submit">
                  <a
                    href="https://www.bharatividyapeethfees.com/school/payment_history"
                    style={{ textDecoration: 'none' }}
                  >
                    Click
                  </a>
                </button>
              </a>
            </p>
            <p>you would find your receipt there</p>
            <p>If not email us to report your issue on{' '}
              <a href="support@bharatividyapeethfees.com" style={{ textDecoration: 'none' }}>
                <button type="submit">
                  <a href="support@bharatividyapeethfees.com" style={{ textDecoration: 'none' }}>
                    Click
                  </a>
                </button>
              </a>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default FAQ;

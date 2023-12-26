import React from "react";

const Faq = () => {
  return (
    <div className="faq-container">
      <div class="faq-title">
        <h4 className="primary-heading">Frequently Asked Questions</h4>
        <h5 className="secondary-heading">
          Everything You want to know about Monify
        </h5>
      </div>
      <div className="faq-section">
        <div className="accordion">
          <details>
            <summary>Is there a free trial available ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>
        <div className="accordion">
          <details>
            <summary>Can I change my plan later ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>{" "}
        <div className="accordion">
          <details>
            <summary>What is you cancellation policy ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>
        <div className="accordion">
          <details>
            <summary>Can other information be added to the invoice ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>{" "}
        <div className="accordion">
          <details>
            <summary>How does billing work ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>{" "}
        <div className="accordion">
          <details>
            <summary>How do I change my account email ? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ducimus laboriosam ullam accusamus adipisci voluptatum assumenda
              harum quidem doloribus placeat.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;

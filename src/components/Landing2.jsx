import React, { useEffect } from "react";
import arrow from "../images/arrow.90ea3564113530f4186ea62ef0e3dac3.svg";
import holdingHand from "../images/hand-holding-card.41d23d2b7f8ee8c002ad.webp";
import food from "../images/food.22a7a1104c48ec1431eb.webp";
import rent from "../images/rent.e51c69dfca3c5097e9bb.webp";
import gas from "../images/gas.97e180f2b6116cde3af0.webp";
import bill from "../images/bills.7de085eb2f1636525460.webp";
import trust from "../images/trust-seal.b1e158b40defd530176f.png";
import review from "../images/review-main.629ab640952de028b2f9.png";
import { Link } from "react-router-dom";
import Fomo from "./Fomo";

const Landing = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    // Function to get user's state
    const getUserState = async () => {
      try {
        // Example API to get user's state based on IP address
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        // For demonstration, using a random state name


        setState(randomState);
      } catch (error) {
        console.error("Error fetching user's state:", error);
      }
    };

    getUserState();
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="root">
      <div class="App">
        <div class="mainWrapper">
          <header>
            <div class="container">
              <div class="row">
                <div class="logo-wrapper">
                  <a href="/">
                    <img
                      src="/static/media/logo.46a0b122f586f8f63c5a.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div class="hero-section">
            <div class="container">
              <div class="row">
                <div class="hero-container">
                  <div class="headline-wrapper">
                    <h1>2024 Government Subsidy Program</h1>
                  </div>
                  <div class="sub-hero-section">
                    <div class="hero-section-wrapper">
                      <div class="hero-section-wrapper-content">
                        <h2>
                          {state} Residents: Act Now to Secure Your $6,329 Government
                          Assistance
                        </h2>
                        <p>
                          Time is running out! DL residents have a unique
                          opportunity to claim a substantial $6400 allowance
                          under a new government program. Don't miss your chance
                          to get the financial support you deserve. Apply today
                        </p>
                      </div>
                      <div class="cta">
                        <Link id="cta-click" to="/income">
                          I Want My Credit
                          <img src={arrow} alt="" />
                        </Link>
                        <span>
                          No Personal Info Needed, Just 2 Minutes to Apply!
                        </span>
                      </div>
                      <div class="review-badge">
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-section">
                  <div class="custom-container">
                    <div class="card-image-holder">
                      <img src={holdingHand} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="trusted-seals">
            <div class="container">
              <div class="row">
                <div class="trusted-seal-headline">
                  <h2>Trusted Partners, Secured Promise</h2>
                </div>
                <div class="trusted-seal-wrapper">
                  <img src={trust} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="claims">
            <div class="container">
              <div class="row">
                <div class="claim-headline-wrapper">
                  <div class="claim-headline-left">
                    <h2>Transform Your Life with the Subsidy Credit Program</h2>
                  </div>
                  <div class="claim-headline-right">
                    <p>
                      Discover the Subsidy Credit Program, a significant
                      initiative designed to support low-income Americans. This
                      program provides a tax credit that can be used to offset
                      expenses for groceries, rent, gas, and bills. See the
                      impact it's already had:
                    </p>
                  </div>
                </div>
                <div class="item-container">
                  <div class="claim-item">
                    <div class="bignumber">$43 Million</div>
                    <div class="smalltext">
                      <p>
                        Funds have been allocated to help households across the
                        country.
                      </p>
                    </div>
                  </div>
                  <div class="claim-item">
                    <div class="bignumber">250,000+</div>
                    <div class="smalltext">
                      <p>
                        More families are taking advantage of the tax credits
                        every day.
                      </p>
                    </div>
                  </div>
                  <div class="claim-item">
                    <div class="bignumber">1 in 3</div>
                    <div class="smalltext">
                      <p>
                        A third of the population is eligible for this impactful
                        program.
                      </p>
                    </div>
                  </div>
                  <div class="claim-item">
                    <div class="bignumber">482 Seats</div>
                    <div class="smalltext">
                      <p>
                        Act fast to claim your tax credit and improve your
                        financial situation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Fomo />
          <div class="section1">
            <div class="container">
              <div class="row">
                <div class="section-1-content">
                  <h1>Less than 24 hours left to enroll in benefits in DL</h1>
                  <p>
                    Thanks to a new government program, residents of DL could
                    qualify for $0 Free Health Insurance and up to a $6,349
                    allowance in subsidy credits for daily expenses.
                  </p>
                </div>
                <div class="item-benefits">
                  <ul>
                    <li>
                      <div class="benefit">
                        <div class="benefitHeadline">
                          <h3>Groceries</h3>
                          <p>
                            Use your subsidy credit to reduce your grocery
                            expenses. Make your budget go further.
                          </p>
                        </div>
                        <div class="benefitImage">
                          <img src={food} alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="benefit">
                        <div class="benefitHeadline">
                          <h3>Rent</h3>
                          <p>
                            Apply your subsidy credit towards your rent.
                            Alleviate the stress of monthly payments.
                          </p>
                        </div>
                        <div class="benefitImage">
                          <img src={rent} alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="benefit">
                        <div class="benefitHeadline">
                          <h3>Gas</h3>
                          <p>
                            Offset your commuting costs with the subsidy credit.
                            Keep your travels worry-free.
                          </p>
                        </div>
                        <div class="benefitImage">
                          <img src={gas} alt="" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="benefit">
                        <div class="benefitHeadline">
                          <h3>Bills</h3>
                          <p>
                            Use the subsidy credit to help pay your utility
                            bills. Keep your home comfortable without financial
                            strain
                          </p>
                        </div>
                        <div class="benefitImage">
                          <img src={bill} alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="container">
              <div class="row">
                <div class="testimonial-headline">
                  <h1>Discover the Difference Today!</h1>
                  <p>
                    Join a community of satisfied customers, evidenced by our
                    outstanding Trustpilot rating. Experience our unparalleled
                    service in just a click. See why we're the preferred choice!
                  </p>
                </div>
                <div class="testimonial-content-holder">
                  <img src={review} alt="" />
                </div>
                <div class="testimonial-list">
                  <div class="testimonial-item">
                    <div class="testimonial-inner">
                      <div class="testimonial-top">
                        <div class="testimonial-left">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                          <h3>Floyd Miles</h3>
                        </div>
                      </div>
                      <div class="testimonial-bottom">
                        <p>
                          I just received mine fast! They worked tirelessly to
                          secure the financial subsidy I needed, and their
                          dedication to customer satisfaction is unmatched.
                        </p>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAYCAYAAAAh3LURAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgB7ZldUhpBEMf/PUshfjxwBDxB9ATiCQKPCVqlJxBPoN5AToAppPJocgLICUxOIDcID6laSMF0eiBCBJZdwEFj9b9qi2HpmR9bdPUXgEqlUq1Fv+vYC2vIY01S3svzUosYM8yZMW5lm1iDlPfyPEpqGH5Gjvr0IBva6W3epSLa8CjlvQ6eQUJR3xTcKwPZzi9Thmcp73XwEjuIHH022kTjtT8pzwOvJVdzEV4iBwnrwYm85EYo8UKfxZXy/PCY+MqCvi7Cm1mD8J2EoXYmi1QvZwLOsrUXcntvYuN3GHNl+9RGL9XKyI5l86jy1sLLbmzzvjuxm5JahCSaJOCNHKRTNxJ2uCzunMMqErBhvkwf4dM8M+Wtl0dENxsle+rWYc1cEvFFEt4oxWRKtsKW536JJHJnxD2M8tbAI6pISjkl5mKPeD+9Zc9Htjv2mpkPB5ezEeeJ4k2lGMlN4l10geUe5zxzhOtFdijPG6/FAR9ufhgUptH2w/a3gUFNNM2bWYN0aygwqCqfZpFEjDaDi5vHaGIJKc8PT+oMWI4+J6yl8oT+nVtTwKcbH/Fl0iZyUPbUs+aqJSGsuFOSImsFKc8fz7gUM3He4+AsjhfZ5rrQJB4Y+yUJ1Fz1YZTnjzeYnM44b5B6JFJZ4Mc83tw5CPPTVizCqoBnkvKen8cY//gupfydiQwlDhQAB/POiHQQF4IQHw6HQ57qiq2c8rzxmOmbW3duqUHUbxDbarduqu6e+yyOF+kgphdMeztxxTJVpu6ngzxWlPL88MjwO+rRvSzzjzxpb08Gf9wRH8TxolOM4ff/vGu6XjpTQnnr2JalfdoFxu0TgROEzhgpr+WFxyi4VBLByy/Nk5B036nRz84tylE2YR0nYvfgLqwo5f1HPK7KLL+OazfTj7N1uSy8NTdJbJX3NnkqlUqlUi2hPxp7IG6/QgvGAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-item">
                    <div class="testimonial-inner">
                      <div class="testimonial-top">
                        <div class="testimonial-left">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                          <h3>Michael Anderson</h3>
                        </div>
                      </div>
                      <div class="testimonial-bottom">
                        <p>
                          Just in time when i need it the most! I can't thank US
                          Support enough for their prompt assistance. Their
                          team's commitment to me is truly commendable
                        </p>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAYCAYAAAAh3LURAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgB7ZldUhpBEMf/PUshfjxwBDxB9ATiCQKPCVqlJxBPoN5AToAppPJocgLICUxOIDcID6laSMF0eiBCBJZdwEFj9b9qi2HpmR9bdPUXgEqlUq1Fv+vYC2vIY01S3svzUosYM8yZMW5lm1iDlPfyPEpqGH5Gjvr0IBva6W3epSLa8CjlvQ6eQUJR3xTcKwPZzi9Thmcp73XwEjuIHH022kTjtT8pzwOvJVdzEV4iBwnrwYm85EYo8UKfxZXy/PCY+MqCvi7Cm1mD8J2EoXYmi1QvZwLOsrUXcntvYuN3GHNl+9RGL9XKyI5l86jy1sLLbmzzvjuxm5JahCSaJOCNHKRTNxJ2uCzunMMqErBhvkwf4dM8M+Wtl0dENxsle+rWYc1cEvFFEt4oxWRKtsKW536JJHJnxD2M8tbAI6pISjkl5mKPeD+9Zc9Htjv2mpkPB5ezEeeJ4k2lGMlN4l10geUe5zxzhOtFdijPG6/FAR9ufhgUptH2w/a3gUFNNM2bWYN0aygwqCqfZpFEjDaDi5vHaGIJKc8PT+oMWI4+J6yl8oT+nVtTwKcbH/Fl0iZyUPbUs+aqJSGsuFOSImsFKc8fz7gUM3He4+AsjhfZ5rrQJB4Y+yUJ1Fz1YZTnjzeYnM44b5B6JFJZ4Mc83tw5CPPTVizCqoBnkvKen8cY//gupfydiQwlDhQAB/POiHQQF4IQHw6HQ57qiq2c8rzxmOmbW3duqUHUbxDbarduqu6e+yyOF+kgphdMeztxxTJVpu6ngzxWlPL88MjwO+rRvSzzjzxpb08Gf9wRH8TxolOM4ff/vGu6XjpTQnnr2JalfdoFxu0TgROEzhgpr+WFxyi4VBLByy/Nk5B036nRz84tylE2YR0nYvfgLqwo5f1HPK7KLL+OazfTj7N1uSy8NTdJbJX3NnkqlUqlUi2hPxp7IG6/QgvGAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-item">
                    <div class="testimonial-inner">
                      <div class="testimonial-top">
                        <div class="testimonial-left">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt=""
                          />
                          <h3>Olivia Martinez</h3>
                        </div>
                      </div>
                      <div class="testimonial-bottom">
                        <p>
                          I was in a financial bind, and US Support came to the
                          rescue. Their team's dedication and service to people
                          are top-notch, and I couldn't be happier with their
                          help.
                        </p>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAYCAYAAAAh3LURAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgB7ZldUhpBEMf/PUshfjxwBDxB9ATiCQKPCVqlJxBPoN5AToAppPJocgLICUxOIDcID6laSMF0eiBCBJZdwEFj9b9qi2HpmR9bdPUXgEqlUq1Fv+vYC2vIY01S3svzUosYM8yZMW5lm1iDlPfyPEpqGH5Gjvr0IBva6W3epSLa8CjlvQ6eQUJR3xTcKwPZzi9Thmcp73XwEjuIHH022kTjtT8pzwOvJVdzEV4iBwnrwYm85EYo8UKfxZXy/PCY+MqCvi7Cm1mD8J2EoXYmi1QvZwLOsrUXcntvYuN3GHNl+9RGL9XKyI5l86jy1sLLbmzzvjuxm5JahCSaJOCNHKRTNxJ2uCzunMMqErBhvkwf4dM8M+Wtl0dENxsle+rWYc1cEvFFEt4oxWRKtsKW536JJHJnxD2M8tbAI6pISjkl5mKPeD+9Zc9Htjv2mpkPB5ezEeeJ4k2lGMlN4l10geUe5zxzhOtFdijPG6/FAR9ufhgUptH2w/a3gUFNNM2bWYN0aygwqCqfZpFEjDaDi5vHaGIJKc8PT+oMWI4+J6yl8oT+nVtTwKcbH/Fl0iZyUPbUs+aqJSGsuFOSImsFKc8fz7gUM3He4+AsjhfZ5rrQJB4Y+yUJ1Fz1YZTnjzeYnM44b5B6JFJZ4Mc83tw5CPPTVizCqoBnkvKen8cY//gupfydiQwlDhQAB/POiHQQF4IQHw6HQ57qiq2c8rzxmOmbW3duqUHUbxDbarduqu6e+yyOF+kgphdMeztxxTJVpu6ngzxWlPL88MjwO+rRvSzzjzxpb08Gf9wRH8TxolOM4ff/vGu6XjpTQnnr2JalfdoFxu0TgROEzhgpr+WFxyi4VBLByy/Nk5B036nRz84tylE2YR0nYvfgLqwo5f1HPK7KLL+OazfTj7N1uSy8NTdJbJX3NnkqlUqlUi2hPxp7IG6/QgvGAAAAAElFTkSuQmCC"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="container top-footer">
              <div class="row">
                <div class="footer-content">
                  <p>
                    Qualifyaca.com is not an insurance or operating company but
                    connects individuals with insurance providers and other
                    affiliates. Plans are insured or covered by a Medicare
                    Advantage organization with a Medicare contract and/or a
                    Medicare-approved Part D sponsor.Enrollment in the plan
                    depends on the plan’s contract renewal with Medicare.
                    Possible options include, but are not limited to Major
                    Medical Plans, Short Term Plans, Christian Health Plans,
                    Health Sharing Plans, discount cards and Fixed Indemnity
                    Plans.Descriptions are for informational purposes only and
                    subject to change. Qualifyaca.com is not affiliated with any
                    insurance plan nor does it represent or endorse any plan. We
                    do not offer every plan available in your area. Any
                    information we provide is limited to those plans we do offer
                    in your area. Please contact Medicare.gov or 1–800 MEDICARE
                    to get information on all of your options. By using this
                    site, you acknowledge that you have read and agree to the
                    Terms of Service, and Privacy Policy. Not affiliated with
                    the U. S. government or federal Medicare program. A licensed
                    agent may contact you regarding this insurance-related
                    information.
                  </p>
                </div>
              </div>
            </div>
            <div class="container bottom-footer">
              <div class="row">
                <div class="footer-navigation">
                  <div class="footer-copyright">
                    <p>© Copyright Qualify Aca 2023</p>
                  </div>
                  <div class="footer-navigation-wrapper">
                    <ul>
                      <li>
                        <a href="/privacy">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/terms">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          {/* <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          /> */}
        </div>
        <div className="privacy policy">
          <h1>
            Privacy Policy
          </h1>
          <p>
            <h2>1. Introduction</h2>
            Welcome to Jango. We respect your privacy and are committed to protecting it through this Privacy Policy. This document outlines how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL].

By using our website, you consent to the practices described in this policy. If you do not agree with this policy, please do not use our website.
          </p>
          <p>
            <h2>2. Information We Collect</h2>
            We may collect various types of information, including:

Personal Information: Name, email address, phone number, billing and shipping addresses, payment details, etc.

Non-Personal Information: Browser type, IP address, device information, referring website, browsing behavior.

Cookies and Tracking Technologies: We use cookies and other tracking technologies to enhance user experience and gather analytics.
          </p>
          <p>
            <h2>3. How We Use Your Information</h2>
            We use the collected information for various purposes, including:

Processing and fulfilling orders.

Communicating with you about orders, promotions, and customer service.

Enhancing website functionality and user experience.

Preventing fraud and ensuring website security.

Complying with legal obligations.
          </p>
          {/* <p> */}
            {/* <h2>
            4. Sharing Your Information
            </h2>
            We do not sell or rent your personal data. However, we may share your information with:

Service Providers: Payment processors, shipping partners, and analytics providers.

Legal Compliance: Authorities if required by law or to protect our rights.

Business Transfers: In case of a merger, acquisition, or asset sale.
          </p> */}

        </div>
      </div>
    </Layout>
  );
};

export default Policy;

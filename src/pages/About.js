import React from "react";
import Layout from "./../components/Layout/Layout";



const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          About Us Welcome to Jango , your one-stop destination for premium quality products and an exceptional shopping experience. Founded in 2025, we are committed to bringing you the best selection of [Product Category, e.g., fashion, electronics, home essentials] at competitive prices.

Our Mission At Jango, our mission is to provide our customers with top-notch products, seamless service, and a hassle-free shopping experience. We believe in quality, affordability, and customer satisfaction as the pillars of our business.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

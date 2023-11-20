"use client";
import Image from "next/image";
import React from "react";
import {
  IoBoatOutline,
  IoRocketOutline,
  IoArrowUndoOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
// import "../globals.css";
import { images } from "../public/assets/index";
import Link from "next/link";
const Testimonials = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="testimonials-box">
            {/* <!--
      - TESTIMONIALS
    --> */}

            <div className="testimonial">
              <h2 className="title">testimonial</h2>

              <div className="testimonial-card">
                <Image
                  src={images.testimonial}
                  alt="alan doe"
                  className="testimonial-banner"
                  width={80}
                  height={80}
                />

                <p className="testimonial-name">Alan Doe</p>

                <p className="testimonial-title">CEO & Founder Invision</p>

                <Image
                  src={images.quotesIcon}
                  alt="quotation"
                  className="quotation-img"
                  width={10}
                />

                <p className="testimonial-desc">
                  Fantastic product, reliable, and user-friendly. Truly
                  impressed with its durability and exceptional performance.
                </p>
              </div>
            </div>

            {/* <!--
      - CTA
    --> */}

            <div className="cta-container">
              <Image
                src={images.CTA}
                alt="summer collection"
                className="cta-banner"
              />

              <Link href={`/products`} className="cta-content">
                <p className="discount">25% Discount</p>

                <h2 className="cta-title">Summer collection</h2>

                <p className="cta-text">Starting @ $10</p>

                <button className="cta-btn">Shop now</button>
              </Link>
            </div>

            {/* <!--
      - SERVICE
    --> */}

            <div className="service">
              <h2 className="title">Our Services</h2>

              <div className="service-container">
                <Link href="#" className="service-item">
                  <div className="service-icon">
                    {/* <IonIcon icon={boatOutline} /> */}
                    <IoBoatOutline />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </Link>

                <Link href="#" className="service-item">
                  <div className="service-icon">
                    {" "}
                    {/* <IonIcon icon={rocketOutline} /> */}
                    <IoRocketOutline />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">UK Orders Only</p>
                  </div>
                </Link>

                <Link href="#" className="service-item">
                  <div className="service-icon">
                    {/* <IonIcon icon={callOutline} /> */}
                    <BsTelephone />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </Link>

                <Link href="#" className="service-item">
                  <div className="service-icon">
                    {/* <IonIcon icon={arrowUndoOutline} /> */}
                    <IoArrowUndoOutline />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </Link>

                <Link href="#" className="service-item">
                  <div className="service-icon">
                    {/* <IonIcon icon={ticketOutline} /> */}
                    <IoTicketOutline />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over $100</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

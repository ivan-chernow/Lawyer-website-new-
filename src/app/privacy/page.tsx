"use client";
import React from "react";
import BaseHeader from "@/components/BaseHeader";
import Footer from "@/modules/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <>
      <BaseHeader />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

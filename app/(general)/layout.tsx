"use client";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <meta property="og:image" content="/logo.png" />
      <meta property="og:image:alt" content="Kolkataff logo" />
      <meta
        name="description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips & Trick Old Results, 220 Patti Chart, Lucky Number - কলকাতা ff"
      />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
      />
      <link rel="canonical" href="https://kolkataff.space" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="KolkataFF.space 2024 FATAFAT Result Today LIVE Tips, Patti Chart"
      />
      <meta
        prefix="og:description"
        content="Kolkata FF Result Kolkata FATAFAT Result Today Live All 8 Baji Live Super Fast With Tips & Trick Old Results, 220 Patti Chart, Lucky Number - কলকাতা ff"
      />
      <meta property="og:site_name" content="Kolkata FF" />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

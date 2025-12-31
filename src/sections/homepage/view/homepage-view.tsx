import { HomepageHero } from "../homepage-hero";
import { HomepagePricing } from "../homepage-pricing";
import { HomepageServices } from "../homepage-services";
import { HomepageWhyChooseUs } from "../homepage-why-choose-us";

// ------------------------------------------------------------

export function HomepageView() {
  return (
    <>
      <HomepageHero />
      <HomepageServices />
      <HomepageWhyChooseUs />
      <HomepagePricing />
      {/* <HomeHowItWorks />
      <HomeTestimonials />
      <HomeLocation /> */}
    </>
  );
}

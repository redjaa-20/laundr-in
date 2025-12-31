import { HomepageHero } from "../homepage-hero";
import { HomepageServices } from "../homepage-services";
import { HomepageWhyChooseUs } from "../homepage-why-choose-us";

// ------------------------------------------------------------

export function HomepageView() {
  return (
    <>
      <HomepageHero />
      <HomepageServices />
      <HomepageWhyChooseUs />
      {/* <HomePricing />
      <HomeHowItWorks />
      <HomeTestimonials />
      <HomeLocation /> */}
    </>
  );
}

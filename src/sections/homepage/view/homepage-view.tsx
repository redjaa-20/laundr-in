import { HomepageHero } from "../homepage-hero";
import { HomepageServices } from "../homepage-services";

// ------------------------------------------------------------

export function HomepageView() {
  return (
    <>
      <HomepageHero />
      <HomepageServices />
      {/* <HomeWhyChooseUs />
      <HomePricing />
      <HomeHowItWorks />
      <HomeTestimonials />
      <HomeLocation /> */}
    </>
  );
}

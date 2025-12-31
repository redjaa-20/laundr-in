import { HomepageHero } from "../homepage-hero";
import { HomepageHowItWorks } from "../homepage-how-it-works";
import { HomepageLocation } from "../homepage-location";
import { HomepagePricing } from "../homepage-pricing";
import { HomepageServices } from "../homepage-services";
import { HomepageTestimonials } from "../homepage-testimonials";
import { HomepageWhyChooseUs } from "../homepage-why-choose-us";

// ------------------------------------------------------------

export function HomepageView() {
  return (
    <>
      <HomepageHero />
      <HomepageServices />
      <HomepageWhyChooseUs />
      <HomepagePricing />
      <HomepageHowItWorks />
      <HomepageTestimonials />
      <HomepageLocation />
    </>
  );
}

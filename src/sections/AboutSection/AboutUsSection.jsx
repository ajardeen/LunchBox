import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-16">
          <span className="inline-block text-xs font-semibold px-4 py-1.5 mb-8 uppercase text-accent border border-accent bg-background rounded-full">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6 text-foreground">
            CULTIVATING A HEALTHIER, HAPPIER YOU
          </h1>

          <p className="text-base font-normal mb-10 max-w-md text-muted">
            We believe that healthy eating shouldn't be a chore. We're passionate about creating
            delicious, nutritious meals that fuel your body and soul, all while making your life easier.
          </p>

          <button className="font-semibold py-3 px-8 rounded-lg uppercase shadow-lg transition duration-300 hover:opacity-90 bg-accent text-background">
            GET STARTED
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pt-4">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">FRESH INGREDIENTS</h3>
            <p className="text-sm font-normal text-muted">
              We source our ingredients locally whenever possible, ensuring peak freshness and supporting our community farmers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">CONVENIENT DELIVERY</h3>
            <p className="text-sm font-normal text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">DELICIOUS & NUTRITIOUS MEALS</h3>
            <p className="text-sm font-normal text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">CUSTOMIZABLE PLANS</h3>
            <p className="text-sm font-normal text-muted">
              We offer a variety of customizable plans to accommodate various dietary restrictions and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

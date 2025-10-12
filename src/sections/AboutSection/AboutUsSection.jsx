import TailwindButton from '../../components/TailwindButton';

const AboutUsSection = () => {
  return (
    <section className="bg-background py-20 p-6">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-16">
          <span className="inline-block text-sm font-semibold px-6 tracking-[0.2em] py-1.5 mb-8 uppercase text-accent  border-accent border-2 bg-background rounded-full">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-none mb-6 text-foreground">
            CULTIVATING A HEALTHIER, HAPPIER YOU
          </h1>

          <p className="text-base font-normal mb-10 max-w-md text-muted">
            We believe that healthy eating shouldn't be a chore. We're passionate about creating
            delicious, nutritious meals that fuel your body and soul, all while making your life easier.
          </p>

           <TailwindButton>
            GET STARTED
            </TailwindButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8  pt-4">
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

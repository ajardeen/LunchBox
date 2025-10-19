import TailwindButton from "../../components/TailwindButton";

const AboutUsSection = () => {
  return (
    <section className="bg-background py-20 p-6">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:pr-16">
          <span className="inline-block text-sm font-semibold px-6 tracking-[0.2em] py-1.5 mb-8 uppercase text-accent  border-accent border-2 bg-background rounded-full">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold tracking-tight leading-none mb-6 text-foreground">
            Real Food. Real Energy. Real Chennai.
          </h1>

          <p className="text-base font-normal lg:mb-10 max-w-md text-muted">
            We believe good food fuels great days. That’s why we craft hygienic,
            home-style meals made with fresh local ingredients — delivered right
            to your desk or doorstep. Our mission? To make eating healthy
            effortless and enjoyable, every single day.
          </p>

          {/* <TailwindButton>GET STARTED</TailwindButton> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-2 gap-x-8  lg:pt-4">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              FARM-TO-LUNCHBOX FRESHNESS
            </h3>
            <p className="text-sm font-normal text-muted">
              Locally sourced. Naturally flavorful. We partner with Chennai’s
              farmers to bring you peak-fresh ingredients that make every bite
              taste better.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              SEAMLESS DAILY DELIVERY
            </h3>
            <p className="text-sm font-normal text-muted">
              No cooking, no chaos. Just reliable, on-time lunchboxes that fit
              your busy schedule — so you can focus on what matters.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              AUTHENTIC TASTE, PERFECTLY BALANCED
            </h3>
            <p className="text-sm font-normal text-muted">
              Home-style recipes, crafted with care. Every meal brings you the
              perfect mix of சுவை (taste) and ஆரோக்கியம் (health).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              FLEXIBLE PLANS TO FIT YOUR LIFE
            </h3>
            <p className="text-sm font-normal text-muted">
              Whether you eat light, go veg, or just want lunch a few days a
              week — we’ve got a plan that fits your rhythm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

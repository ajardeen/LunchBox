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
            OUR BELIEF: QUALITY FUEL, QUALITY LIFE.
          </h1>

          <p className="text-base font-normal lg:mb-10 max-w-md text-muted">
            We see food as more than just sustenance—it's the foundation of your
            energy, focus, and happiness. We are dedicated to creating a
            subscription experience that delivers authentic, hygienic, and
            home-cooked goodness right to you. Our goal is simple: to make
            healthy eating a joyful, consistent part of your busy Chennai life.
          </p>

          {/* <TailwindButton>GET STARTED</TailwindButton> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:gap-y-2 gap-x-8  lg:pt-4">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              FARM-TO-LUNCHBOX FRESHNESS
            </h3>
            <p className="text-sm font-normal text-muted">
              We believe the best meals start with the best produce. We source
              our ingredients locally whenever possible, ensuring peak flavor
              and supporting Chennai's community farmers. This dedication
              guarantees a difference you can taste.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              SEAMLESS DAILY DELIVERY
            </h3>
            <p className="text-sm font-normal text-muted">
              Forget the hassle of packing, ordering, or rushing out. Your
              authentic, home-cooked lunch arrives at your doorstep or office—on
              time, every time. Our subscription model is built for your busy
              schedule, giving you one less thing to worry about.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              AUTHENTIC TASTE, PERFECTLY BALANCED
            </h3>
            <p className="text-sm font-normal text-muted">
              We've mastered the art of making healthy food taste like home. Our
              chefs craft meals that are rich in authentic flavors (சுவை) while
              ensuring they meet the nutritional standards (ஆரோக்யம்) that keep
              you energized and focused all afternoon.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground uppercase">
              FLEXIBLE PLANS TO FIT YOUR LIFE
            </h3>
            <p className="text-sm font-normal text-muted">
              No two legends are the same. We offer a variety of customizable
              subscription plans to accommodate your dietary restrictions,
              preferences, and schedule. Need a meal only three days a week?
              Vegetarian options? We have a plan designed just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

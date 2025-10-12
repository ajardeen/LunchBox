import { FaPlateWheat } from "react-icons/fa6";
import { GiBerriesBowl, GiWheat, GiMilkCarton } from "react-icons/gi";
import { TbBottleFilled } from "react-icons/tb";
import Galary from "../AboutSection/Galary";

const CategoryBottomLayer = () => {
  const categories = [
    {
      icon: <FaPlateWheat color="var(--color-accent)" size={25} />,
      title: "KETO",
      description: "Start Your Meal with Protein",
    },
    {
      icon: <GiBerriesBowl color="var(--color-accent)" size={25} />,
      title: "VEGAN",
      description: "Plant-Powered Plates",
    },
    {
      icon: <GiMilkCarton color="var(--color-accent)" size={25} />,
      title: "DAIRY FREE",
      description: "Lactose Intolerant Friendly",
    },
    {
      icon: <GiWheat color="var(--color-accent)" size={25} />,
      title: "GLUTEN FREE",
      description: "Tasty But Suit Your Diet",
    },
    {
      icon: <TbBottleFilled color="var(--color-accent)" size={25} />,
      title: "JUICE",
      description: "Fresh Juice Add On",
    },
  ];
  return (
    <div className=" bg-transparent font-body">
      <section className="py-16 text-center flex flex-col items-center justify-center">
        <div className="bg-background w-fit  font-runde shadow text-accent uppercase text-sm font-medium px-8  py-2 rounded-3xl border border-accent tracking-[0.4em]">
          Category Us
        </div>
        <h2 className="text-2xl uppercase md:text-4xl font-heading font-bold text-foreground leading-tight mt-6 md:mb-16 px-10 md:px-0">
          Quench Your Thirst, Satisfy <br className="hidden md:block"/> Your Hunger
        </h2>

        <div className="w-full flex flex-wrap justify-center md:justify-around mt-12 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center w-32">
              <div className="bg-gray-400/10 rounded-full p-6 mb-3">
                {category.icon}
              </div>
              <p className="font-semibold text-foreground text-lg">
                {category.title}
              </p>
              <p className="text-xs text-muted mt-1 text-center">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

  
      <Galary />
    </div>
  );
};

export default CategoryBottomLayer;

// Icons
import { PlantsIcon, BoxIcon, PhoneIcon } from '@/components';

const Introduction = () => (
  <>
    <section className="about-us flex flex-col gap-24 my-24">
      <div className="w-full text-center">
        <h3 className="text-3xl font-medium mb-4">About us</h3>
        <span className="font-medium text-base text-text-secondary">
          Order now and appreciate the beauty of nature
        </span>
      </div>

      <ul className="flex justify-between gap-6">
        <li className="max-w-[400px] flex flex-col gap-3 items-center text-center">
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-background-secondary p-6">
            <PlantsIcon customClass="w-10 h-10" />
          </div>
          <span className="font-bold text-lg mt-2">Large Assortment</span>
          <p className="font-medium text-base text-text-secondary">
            We offer many different types of products with fewer variations in
            each category.
          </p>
        </li>

        <li className="max-w-[400px] flex flex-col gap-3 items-center text-center">
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-background-secondary p-6">
            <BoxIcon customClass="w-10 h-10" />
          </div>
          <span className="font-bold text-lg mt-2">Fast & Free Shipping</span>
          <p className="font-medium text-base text-text-secondary">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </li>

        <li className="max-w-[400px] flex flex-col gap-3 items-center text-center">
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-background-secondary p-6">
            <PhoneIcon customClass="w-10 h-10" />
          </div>
          <span className="font-bold text-lg mt-2">24/7 Support</span>
          <p className="font-medium text-base text-text-secondary">
            Answers to any business related inquiry 24/7 and in real-time.
          </p>
        </li>
      </ul>
    </section>
  </>
);

export default Introduction;

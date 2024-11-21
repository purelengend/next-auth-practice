// Components
import { Skeleton } from '@/components/common/Skeleton';

const totalItems = 3;

const IntroductionSkeleton = () => (
  <section className="about-us flex flex-col gap-24 my-24">
    <div className="w-full text-center">
      <h3 className="text-3xl font-medium mb-4">About us</h3>
      <span className="font-medium text-base text-text-secondary">
        Order now and appreciate the beauty of nature
      </span>
    </div>

    <ul className="flex justify-between gap-6">
      {Array.from({ length: totalItems }).map((_, index) => (
        <li
          key={index}
          className="max-w-[400px] flex flex-col gap-3 items-center text-center"
        >
          <div className="w-24 h-24 flex justify-center items-center rounded-full bg-background-secondary p-6">
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
          <Skeleton className="w-40 mt-2" />
          <Skeleton className="h-20 w-60" />
        </li>
      ))}
    </ul>
  </section>
);

export default IntroductionSkeleton;

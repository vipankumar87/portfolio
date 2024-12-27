import { cn } from "@rudra/lib/utils";
import { BackgroundGradientAnimation } from "../background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string
  imgClassName: string
  titleClassName: string
  spareImg: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-transparent group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 28%, rgba(9,9,121,1) 63%, rgba(0,212,255,0) 100%)'
      }}
    >
      <div className={`flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} className={cn(imgClassName, 'object-cover', 'object-center')} alt="" />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 id-${id} ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img src={spareImg} alt={spareImg} className={`object-cover object-center w-full h-full`} />
          )}
        </div>
        {id ===6 && (
          <BackgroundGradientAnimation containerClassName="absolute">
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center')}>
          <div className="font-sans font-extralight text-neutral-600 text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-95 z-10">
            {title}
          </div>

        </div>
      </div>
    </div>
  );
};

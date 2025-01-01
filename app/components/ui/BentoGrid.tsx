import { cn } from "@rudra/lib/utils";
import { BackgroundGradientAnimation } from "../background-gradient-animation";
import GlobeComponent from "./Glob";

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
        "row-span-1 relative overflow-hidden rounded-3xl border border-transparent group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p- pt-0 dark:bg-black dark:border-white/[0.2] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundImage: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 28%, rgb(11 11 67) 63%, rgba(0, 212, 255, 0) 100%)'
      }}
    >
      <div className={`flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} className={cn(imgClassName, 'object-cover', 'object-center')} alt="" />
            </>
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 id-${id} ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={spareImg} alt={spareImg} className={`object-cover object-center w-full h-full`} />
            </>
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
        {/* {id === 2 && (
          <div>
            <GlobeComponent/>
          </div>
        )} */}
        {id == 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-[5rem] lg:-right-15">
            <div className="flex flex-col gap-3 lg:gap-8">
              {["React.JS", "Next.JS", "TypeScript"].map((item, idx) => (
                <span key={idx} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              {["Node.JS", "Adonis", "Nest.JS", "Laravel"].map((item, idx) => (
                <span key={idx} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

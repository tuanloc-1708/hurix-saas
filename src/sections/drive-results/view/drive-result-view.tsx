import DriveResultCard from "../card/drive-result-card";
import CircleBullet from "../circle-bullet";

export const keyEffect = [
  "Easy-to-adopt sales software that leverages AI.",
  "Customer service software powered.",
];

export default function DriveResultView() {
  return (
    <div className="container md:px-[50px] xl:[222px] flex flex-col gap-8 justify-center">
      <div className="grid justify-items-stretch items-center justify-center gap-3">
        <div className="justify-self-start">
          <p className=" xl:max-w-[400px] text-[40px]/[120%] tracking-[-2.4px] font-normal">
            Drive Results With Hurix for Marketers & Product
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 xl:gap-[15px] 2xl:gap-52">
          <p className="xl:max-w-[400px] xl:flex-1 text-[14px]/[171%] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at est ut odio cursus efficitur. Cras pharetra consectetur mi, nec
            eleifend justo pharetra vel. Praesent interdum lacinia varius.
          </p>
          <div className="flex flex-col xl:flex-1 gap-3">
            <span className="text-[14px]/[145%] font-medium">
              Keys to Efficient Web Development:
            </span>

            <div className="flex flex-col gap-2">
              {keyEffect.map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CircleBullet className="w-3 h-3" />
                  <span className="text-[14px]/[171%] font-normal">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DriveResultCard />
    </div>
  );
}

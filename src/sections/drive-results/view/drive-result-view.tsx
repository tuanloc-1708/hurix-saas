import DriveResultCard from "../card/drive-result-card";
import CircleBullet from "../circle-bullet";

export const keyEffect = [
  "Easy-to-adopt sales software that leverages AI.",
  "Customer service software powered.",
];

export default function DriveResultView() {
  return (
    <div className="container flex flex-col gap-8">
      <div>
        <p className="text-[40px]/[120%] tracking-[-0.4px] font-normal">
          Drive Results With Hurix for Marketers & Product
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-[14px]/[171%] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          est ut odio cursus efficitur. Cras pharetra consectetur mi, nec
          eleifend justo pharetra vel. Praesent interdum lacinia varius.
        </p>
        <div className="flex flex-col gap-3">
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
      <DriveResultCard />
    </div>
  );
}

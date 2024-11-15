import LogoIcon from "@/icon/logo-icon-svg";
import FooterColumn from "./footer-column";
import FooterLink from "./footer-link";

export function Footer() {
  return (
    <footer className=" text-white">
      <div className="flex flex-col px-auto py-24">
        <div className=" flex items-center gap-2 mb-14">
          <LogoIcon width={31} height={31} viewBox="0 0 31 31" />
          <span className="text-white text-xl">Hurix</span>
        </div>

        <div className=" flex gap-32">
          <div className="flex gap-36">
            <div className="flex flex-col gap-4">
              <FooterColumn title="Features">
                <div className="flex flex-col gap-2">
                  <FooterLink href="#!">Home</FooterLink>
                  <FooterLink href="#!">About</FooterLink>
                  <FooterLink href="#!">Products</FooterLink>
                </div>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-4">
              <FooterColumn title="Solutions">
                <div className="flex flex-col gap-2">
                  <FooterLink href="#!">Pricing</FooterLink>
                  <FooterLink href="#!">Blog</FooterLink>
                  <FooterLink href="#!">Blog Articles</FooterLink>
                </div>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-4">
              <FooterColumn title="Company">
                <div className="flex flex-col gap-2">
                  <FooterLink href="#!">Contact</FooterLink>
                  <FooterLink href="#!">Login</FooterLink>
                  <FooterLink href="#!">Sign Up</FooterLink>
                </div>
              </FooterColumn>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">Email</h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Hello@djectstudio.com"
                className="w-full bg-[#171717] border border-gray-500 rounded-lg px-4 py-3 text-gray-600 placeholder-slate-700"
              />
              <button className="w-full bg-gradient-to-r from-[#FCD5BF] to-[#FFA9CC] text-black rounded-lg py-3 font-medium hover:opacity-90 transition-opacity">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

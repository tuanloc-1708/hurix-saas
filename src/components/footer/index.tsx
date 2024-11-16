import LogoIcon from "@/icon/logo-icon-svg";
import BrandNameIcon from "@/icon/brand-name-svg";
import FooterColumn from "./footer-column";
import FooterLink from "./footer-link";
import Input from "../share/input/input";
import Button from "../share/button/button";

export function Footer() {
  return (
    <footer className="flex flex-col text-white-text-gradient xl:py-[92px] xl:px-auto xl:items-center xl:justify-center">
      <div className="">
        <div className="flex pt-9 pb-14 items-center gap-2">
          <LogoIcon width={31} height={31} viewBox="0 0 31 31" />
          <BrandNameIcon width={39} height={16} viewBox="0 0 39 16" />
        </div>

        <div className="flex flex-wrap mb-12">
          <FooterColumn title="Features">
            <div className="flex flex-col gap-2">
              <FooterLink href="#!">Home</FooterLink>
              <FooterLink href="#!">About</FooterLink>
              <FooterLink href="#!">Products</FooterLink>
            </div>
          </FooterColumn>

          <FooterColumn title="Solutions">
            <div className="flex flex-col gap-2">
              <FooterLink href="#!">Pricing</FooterLink>
              <FooterLink href="#!">Blog</FooterLink>
              <FooterLink href="#!">Blog Articles</FooterLink>
            </div>
          </FooterColumn>

          <FooterColumn title="Company">
            <div className="flex flex-col gap-2">
              <FooterLink href="#!">Contact</FooterLink>
              <FooterLink href="#!">Login</FooterLink>
              <FooterLink href="#!">Sign Up</FooterLink>
            </div>
          </FooterColumn>

          <div className="flex flex-col gap-1 xl:pl-36 xl:pt-1">
            <h3 className="pl-2 text-white text-[13px] leading-5 font-normal">
              Email
            </h3>
            <div className="flex flex-col gap-2 pr">
              <Input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-72 h-9"
              />
              <Button>Sign up</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-12 gap-6 xl:flex-row xl:justify-between">
          <p className="text-[14px] leading-6">Copyright &copy; 2024</p>

          <div className="flex gap-6 text-[13px] leading-5">
            <FooterLink href="#!">Privacy Policy</FooterLink>
            <span className="w-px h-5 items-center bg-[rgba(255,255,255,0.12)]"></span>
            <FooterLink href="#!">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

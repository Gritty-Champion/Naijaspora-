import * as React from "react";
import { Menubar, NavigationMenu } from "radix-ui";
import MenuPlane from "@/img/menuPlane.svg";
import MenuAgent from "@/img/menuAgent.svg";
import MenuMoney from "@/img/menuMoney.svg";
import MenuBlog from "@/img/menuBlog.svg";
import MenuHelp from "@/img/menuHelp.svg";
import MenuVideo from "@/img/menuVideos.svg";
import { RiArrowDropDownFill } from "@remixicon/react";
import { useRouter } from "next/router";
import Button from "./Button";
import {useController} from "@/hooks/useController";
import { cn } from "@/libs/cn";

interface HeaderMenuProps {
  isScrolled: boolean,
  isHeroInView: boolean
}

const HeaderMenu = ({ isScrolled, isHeroInView }: HeaderMenuProps) => {
  const router = useRouter();
  const menuItems = [
    {
      label: "Services",
      items: [
        {
          label: "Visa Interview Preparation",
          icon: MenuPlane,
          link: "#",
          desc: "Ace your interview",
        },
        {
          label: "Zero Collateral Loans",
          icon: MenuMoney,
          link: "#",
          desc: "Quick, backed loans for tuition & travel",
        },
        {
          label: "Agent Verification Services",
          icon: MenuAgent,
          link: "#",
          desc: "Connect with trusted, licensed agents",
        },
      ],
      hasChildren: true,
      hasSider: true,
      siderContent: {
        title: "Discover",
        data: [
          {
            title: "For Agents",
            link: "",
          },
          {
            title: "For Nigerians in Diaspora",
            link: "",
          },
          {
            title: "For Japa Hopefuls",
            link: "",
          },
          {
            title: "Join the community",
            link: "",
          },
        ],
      },
    },

    {
      label: "Learn",
      items: [
        {
          label: "Help Center",
          icon: MenuHelp,
          link: "#",
          desc: "Quick answers for your relocation journey",
        },
        {
          label: "Blog",
          icon: MenuBlog,
          link: "#",
          desc: "Tips, trends & updates on moving abroad.",
        },
        {
          label: "Videos",
          icon: MenuVideo,
          link: "#",
          desc: "Watch guides to use NaijaSpora with ease",
        },
      ],
      hasChildren: true,
      hasSider: false,
    },

    {
      label: "Company",
      hasChildren: false,
      hasSider: false,
    },
  ];

  return (
    <NavigationMenu.Root className="z-10 hidden lg:flex items-center gap-[32px]">
      <NavigationMenu.List className="center m-0 flex items-center gap-[32px] list-none">
        {menuItems.map((menu, idx) => (
          <NavigationMenu.Item key={idx}>
            <NavigationMenu.Trigger className="group  flex justify-center items-center gap-[12px]">
              <p
                className={cn("text-title-medium font-montserrat font-medium", {
                  "text-primary-on_primary": isScrolled || isHeroInView,
                  "text-black": !isHeroInView,
                })}
              >
                {menu.label}
              </p>

              {menu.hasChildren && (
                <div className="flex items-center justify-center gap-2.5">
                  <RiArrowDropDownFill
                    className={cn("w-7 h-7 aspect-[1/1]", {
                      "text-primary-on_primary": isScrolled || isHeroInView,
                      "text-black": !isHeroInView,
                    })}
                  />
                </div>
              )}
            </NavigationMenu.Trigger>

            {menu.hasChildren && (
              <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto inline-flex justify-end items-center gap-2.5 bg-secondary-secondary_fixed p-5 rounded-[20px]">
                <div className="flex min-w-fit flex-col justify-center items-center gap-5 bg-white p-2.5 rounded-[15px]">
                  {menu.items?.map((Item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        router.push(Item.link);
                      }}
                      className="flex w-full items-center gap-5 cursor-pointer"
                    >
                      <Item.icon />
                      <div className="flex flex-col justify-between items-start">
                        <p className="self-stretch text-black font-montserrat text-title-medium font-bold ">
                          {Item.label}
                        </p>
                        <p className="self-stretch text-nowrap text-black font-montserrat text-title-medium font-medium ">
                          {Item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  {menu.label === "Services" && (
                    <Button variant="text">View all</Button>
                  )}
                </div>

                {menu.hasSider && (
                  <div className="flex flex-col items-start gap-[15px] self-stretch p-2.5">
                    <p className="text-surface-on text-center font-montserrat text-title-medium font-bold ">
                      {menu.siderContent?.title}
                    </p>

                    {menu.siderContent?.data.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => router.push(item.link)}
                        className="text-surface-on text-nowrap cursor-pointer text-center font-montserrat text-title-small font-medium"
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </NavigationMenu.Content>
            )}
          </NavigationMenu.Item>
        ))}

        {/* <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
        </NavigationMenu.Indicator> */}
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-fit origin-[top_center] overflow-hidden rounded-md bg-transparent transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};



export default HeaderMenu;

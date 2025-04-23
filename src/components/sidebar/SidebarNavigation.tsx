import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import UserProfile from "./UserProfile";

const SidebarNavigation: React.FC = () => {
  return (
    <div className="w-full flex-1 mt-3">
      <SidebarItem
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0e8cfb480bc330ff2ad6c2b651bc5699323c4b68?placeholderIfAbsent=true"
        label="Home"
        active={true}
      />

      <div className="w-full flex-1 mt-3">
        <div className="w-full">
          <SidebarSection title="Boards">
            <SidebarItem
              label="Weekly reports"
              hasDropdown={true}
              dropdownIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/4231c88052d3e2525a9de03ad0a98c1828e776d0?placeholderIfAbsent=true"
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/12d7b10b20afcda32eab386fa8b54ab4d3a88580?placeholderIfAbsent=true"
              label="Top performing"
              indented={true}
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2f02816f11d4fe6a0951fd0bc056bd716428b1?placeholderIfAbsent=true"
              label="Top creative"
              indented={true}
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/12d7b10b20afcda32eab386fa8b54ab4d3a88580?placeholderIfAbsent=true"
              label="Other reports"
              indented={true}
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2f02816f11d4fe6a0951fd0bc056bd716428b1?placeholderIfAbsent=true"
              label="Other reports"
              indented={true}
            />
            <SidebarItem
              label="Another type of reports"
              hasDropdown={true}
              dropdownIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/77c8831cf1004cafad52700ce41da5d2d2fed429?placeholderIfAbsent=true"
            />
            <SidebarItem
              label="Another type of reports"
              hasDropdown={true}
              dropdownIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/77c8831cf1004cafad52700ce41da5d2d2fed429?placeholderIfAbsent=true"
            />
          </SidebarSection>

          <SidebarSection title="Mapping" className="mt-5">
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6975dbf1df0c80b5834a9d5ed36c6a44af23cc69?placeholderIfAbsent=true"
              label="Landing pages"
            />
          </SidebarSection>
        </div>

        <div className="flex w-full flex-col items-stretch leading-none justify-center mt-[166px] max-md:mt-10">
          <SidebarSection title="workspace">
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ee4f4cb8d1ce63133791c4d18dbb78b3b7aaeba0?placeholderIfAbsent=true"
              label="Tags"
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2de38b0cd0d0d51badf7702388fcc8d646db45?placeholderIfAbsent=true"
              label="Members"
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3f86580bfee7b2a95d8a612ef6660a1771cb823f?placeholderIfAbsent=true"
              label="Data sources"
            />
            <SidebarItem
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d36cd23bd6a2379760d9ab380483a73a50d304bb?placeholderIfAbsent=true"
              label="Subscription"
            />
          </SidebarSection>

          <div className="border min-h-px w-full mt-4 border-[rgba(0,0,0,0.1)] border-solid" />

          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;

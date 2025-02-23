import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const HeaderText = ({ title, subTitle }: Props) => {
  return (
    <div className="text-center max-w-[860px] space-y-4 mx-auto">
      <h1 className="font-bold text-dark_green text-2xl md:text-[36px]">
        {title}
      </h1>
      <p className="text-text_color_01 text-[20px] leading-[19px]">
        {subTitle}
      </p>
    </div>
  );
};

export default HeaderText;

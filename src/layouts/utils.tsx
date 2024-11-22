import React from "react";

const entityMap: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

export function sanitizeHtml(html: string) {
  return String(html)
    .replace(/[&<>"'\/]/g, key => entityMap[key])
    .replace("\\n", "<br />");
}

export const RLogo: React.FC<{
  theme?: "light" | "dark";
  style?: React.CSSProperties;
}> = ({ theme = "dark", style, ...props }) => {
  const rlogo =
    theme === "dark"
      ? "https://imagedelivery.net/hwPMYJB5MK91opo-x-eR1Q/b2d8c60b-1bd9-4dcd-4de3-f6fca8e97200/public"
      : "https://imagedelivery.net/hwPMYJB5MK91opo-x-eR1Q/06617785-6eb1-4c82-b958-2714f37ee500/public";

  return (
    <img
      src={rlogo}
      className="rlogo"
      style={{ width: 96, height: 96, ...style }}
      {...props}
    />
  );
};

export const GradientBackground: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "dark",
}) => {
  if (theme == "dark") {
    return (
      <div
        tw="absolute inset-0 flex justify-start items-end w-full h-full"
        style={{ background: `#13111C` }}
      >
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(327.21deg, rgba(33, 0, 75, 0.35) 3.65%, rgba(60, 0, 136, 0) 40.32%)",
          }}
        />
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(245.93deg, rgba(209, 21, 111, 0.26) 0%, rgba(209, 25, 80, 0) 36.63%)",
          }}
        />
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.1) 85.72%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      tw="absolute inset-0 flex justify-start items-end w-full h-full"
      style={{ background: `#ffffff` }}
    >
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(71.9deg, rgba(243, 91, 164, 0.3) -15.4%, rgba(209, 25, 80, 0) 46.76%)",
        }}
      />
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(149.36deg, rgba(190, 178, 251, 0) 37.9%, rgba(164, 94, 252, 0.19) 81.22%)",
        }}
      />
    </div>
  );
};

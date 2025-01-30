"use client";

{/* import { useEffect } from "react"; */}

export default function Favicon(){
  {/*
  not working , need to fix

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const changeFavicon = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (mediaQuery.matches) {
        favicon.href = "/assets/icon/ds-icon-dark.png";
      } else {
        favicon.href = "/assets/icon/ds-icon-light.png";
      }
    };

    changeFavicon();

    mediaQuery.addEventListener("change", changeFavicon);
  });
  */}

  return (
    <>
      <link id="favicon" rel="icon" type="image/png" href="/assets/icon/ds-icon-dark.png"/>
    </>
  );
};



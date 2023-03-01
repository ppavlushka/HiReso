import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Logo({ className = "" }) {
  const { resolvedTheme: theme } = useTheme();
  return (
    <Image
      src={`/img/logo${theme === "dark" ? "-dark" : ""}.svg`}
      alt="Logo image"
      width={179}
      height={56}
      className={className}
    />
  );
}

export default Logo;

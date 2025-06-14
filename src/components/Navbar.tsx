"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    <div className="w-full flex justify-between border-b py-4 ">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="zh">ZH</option>
        <option value="ja">JA</option>
      </select>
    </div>
  );
};

export default Navbar;

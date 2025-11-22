"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const items = [
    { name: "About", href: "/about" },
    { name: "Properties", href: "/properties" },
    { name: "Agents", href: "/agents" },
    { name: "Blogs", href: "/blogs" },
  ];
  return (
    <main className="flex justify-between py-7  font-bold">
      <h1>SaharanpurProperty</h1>

      <section className="flex gap-7 ">
        {items.map((item, index) => (
          <div
            key={index}
            className=" hover:text-gray-400 cursor-pointer"
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </div>
        ))}
      </section>

      <button className="bg-blue-500 rounded-[25px] text-white cursor-pointer p-3 px-4">
        Contact Us
      </button>
    </main>
  );
}

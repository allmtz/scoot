import Link from "next/link";
export const MobileNav = ({ navIsOpen }: { navIsOpen: boolean }) => {
  return (
    <>
      <div
        className={
          navIsOpen
            ? "fixed bg-clear-gray z-20 h-full w-full md:hidden"
            : "hidden"
        }
      >
        <ul
          role="list"
          className="absolute flex flex-col gap-10  bg-slate-700  left-0 z-20 h-full p-4 w-[200px] text-white"
        >
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/location"}>Location</Link>
          </li>
          <li>
            <Link href={"/careers"}>Careers</Link>
          </li>

          <li className="absolute bottom-20 left-auto">
            <button className="font-space-mono bg-ylw px-8 py-3">
              Get Scootin
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

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
        <div className="absolute flex flex-col bg-slate-700  left-0 z-20 h-full p-4 w-[220px] text-white">
          <ul role="list" className="flex flex-col gap-10 mt-5">
            <li>
              <Link href={"/about"} className="hover:text-ylw">
                About
              </Link>
            </li>
            <li>
              <Link href={"/location"} className="hover:text-ylw">
                Location
              </Link>
            </li>
            <li>
              <Link href={"/careers"} className="hover:text-ylw">
                Careers
              </Link>
            </li>

            <li className="self-center mt-20">
              <button className="font-space-mono bg-ylw px-8 py-3 hover:text-ylw hover:bg-white">
                Get Scootin
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

import Link from "next/link";

export const MobileNav = ({ navIsOpen }: { navIsOpen: boolean }) => {
  return (
    <>
      <div
        className={
          navIsOpen
            ? "fixed z-20 h-full w-full bg-clear-gray md:hidden"
            : "hidden"
        }
      >
        <div className="absolute left-0 z-20 flex  h-full w-[220px] flex-col bg-slate-700 p-4 text-white">
          <ul role="list" className="mt-5 flex flex-col gap-10">
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

            <li className="mt-20 self-center">
              <button className="bg-ylw px-8 py-3 font-space-mono hover:bg-white hover:text-ylw">
                Get Scootin
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

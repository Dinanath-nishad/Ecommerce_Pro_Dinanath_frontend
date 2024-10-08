import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import '../Style/beauty.css'

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div>
                    <div class="px-3 text-left md:cursor-pointer group">
                        <h1
                            class="py-4 flex justify-between items-center text-lg group"
                            onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(""); }}
                        >
                            {link.name}
                            <span class="text-xl md:hidden inline">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>
                            </span>
                            <span class="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div class="absolute top-20 hidden group-hover:md:block hover:md:block">
                                    <div class="py-3">
                                        <div
                                            class="w-4 h-4 left-3 absolute  mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div class="bg-slate-700 p-5 grid grid-cols-5 gap-10 d-flex justify-content-center">
                                        {link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 class="text-xs font-semibold">
                                                    {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li class="text-sm text-gray-600 my-1.5 inline" id="honda">
                                                        <Link
                                                            to={slink.link}
                                                            class="hover:text-primary text-zinc-50"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        class={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        class="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                                    >
                                        {slinks.Head}

                                        <span class="text-xl md:mt-1 md:ml-2 inline">
                                            <ion-icon
                                                name={`${subHeading === slinks.Head
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                                    }`}
                                            ></ion-icon>
                                        </span>
                                    </h1>
                                    <div
                                        class={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li class="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
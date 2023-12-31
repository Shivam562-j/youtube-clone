import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";

function Navbar() {
    return (
        <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky shadow-sm">
            <div className="flex gap-8 text-2xl ">
                <div className="flex items-center">
                    <GiHamburgerMenu />
                </div>

                <div className="flex gap-2 items-center justify-center justify-items-center ">
                    <BsYoutube className="text-2xl text-red-600" />
                    <span className="text-xl">YouTube</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5">
                <form>
                    <div className="flex items-center bg-zinc-900 h-10 px-4 pr-2 rounded-3xl">
                        <div className="flex gap-5 items-center pr-5">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-96 bg-zinc-900 focus:outline-none"
                            />
                        </div>
                        <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                            <AiOutlineSearch className="text-xl " />
                        </button>
                    </div>
                </form>

                <div className="text-xl p-3 bg-zinc-900 rounded-full">
                    <FaMicrophone />
                </div>
            </div>

            <div className="flex gap-5 items-center text-xl">
                <RiVideoAddLine />
                <div className="relative">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        9+
                    </span>
                </div>
                <img
                    src="https://yt3.googleusercontent.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s900-c-k-c0x00ffffff-no-rj"
                    alt="profile-log"
                    className="w-9 h-9 rounded-full"
                />
            </div>
        </div>
    );
}

export default Navbar;

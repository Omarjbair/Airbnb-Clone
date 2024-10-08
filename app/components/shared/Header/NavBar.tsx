import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

const NavBar = () => {
    return (
        <div className='flex space-x-4 max-sm:space-x-1 items-center justify-end text-gray-500 max-sm:hidden'>
            <p className='hidden xl:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer max-md:hidden' />
            <div className='flex space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' /> 
            </div>
        </div>
    )
};

export default NavBar;

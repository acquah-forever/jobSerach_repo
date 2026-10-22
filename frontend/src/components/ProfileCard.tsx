import { useLogout, useAuthenticatedUser } from "../authContext/useAuth";
import { useRef } from 'react';
import { useOnClickOutside } from "usehooks-ts";
import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

type ProfileCardProps = {
    onClose: () => void;
};

const ProfileCard = ({onClose}:ProfileCardProps) => {
    const { data: user, isLoading } = useAuthenticatedUser();
    const { mutate: logOut } = useLogout();
    const navigate = useNavigate();

    const cardRef = useRef<HTMLDivElement>(null);
     useOnClickOutside(cardRef, onClose);


    function handleLogout() {
        logOut(undefined, {
            onSuccess: () => {
                onClose();
                navigate('/login');
            }
        })
    }

    if (isLoading || !user) return null;

    return (
        <div className='hidden absolute top-12 right-0 sm:flex justify-end text-black px-3 py-4'>
            <div ref={cardRef} className="card bg-base-100 w-60 p-3">
                <div>
                    <div className="flex justify-end">
                        <button type='button' aria-label='Close account menu' onClick={onClose}> <X className='cursor-pointer' size={20} /></button>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <div className='flex items-center justify-center border border-white w-12 h-12 rounded-full bg-slate-700'>
                        <span className='text-white'>{user.name.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div className="mt-2">
                        <p className='text-xs'>{user.name}</p>
                        <p className='text-xs'>{user.email}</p>
                    </div>
                </div>
                <h1 className='font-semibold text-sm mt-2 mb-4'>TechJob Finder</h1>
                <NavLink to='/profile' className='cursor-pointer text-sm flex justify-start hover:text-blue-500 hover:underline mb-2'onClick={onClose} >Profile</NavLink>
                <h1 className='hover:text-blue-500 hover:underline cursor-pointer text-sm'onClick={onClose}>Theme</h1>
                <div className='divider'></div>
                {!isLoading && user &&
                    <div className='max-w-2xl w-full'>
                        <button type='button' className='cursor-pointer bg-linear-to-br  text-slate-500 text-sm mb-3' onClick={handleLogout}>Log out</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default ProfileCard;

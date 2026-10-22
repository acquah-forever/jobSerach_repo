import { useLogout, useAuthenticatedUser } from "../authContext/useAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

type ProfileCardProps = {
    onClose: () => void;
};

const ProfileCard = ({onClose}:ProfileCardProps) => {
    const { data: user, isLoading } = useAuthenticatedUser()
    const { mutate: logOut } = useLogout();
    const navigate = useNavigate();


    function handleLogout() {
        logOut(undefined, {
            onSuccess: () => {
                onClose()
                navigate('/login')
            }
        })
    }

    if (isLoading || !user) return null;
    
    return (
        <div className='hidden absolute top-12 right-0 sm:flex justify-end text-black'>
            <div className="card bg-base-100 w-60 p-3">
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
                        <h1 className='text-xs'>{user.name}</h1>
                        <h1 className='text-xs'>{user.email}</h1>
                    </div>
                </div>
                <h1 className='font-semibold text-sm mt-2 mb-4'>TechJob Finder</h1>
                <NavLink to='/profile' className='cursor-pointer text-sm flex justify-start hover:text-blue-500 hover:underline mb-2' >Profile</NavLink>
                <h1 className='hover:text-blue-500 hover:underline cursor-pointer text-sm'>Theme</h1>
                <div className='divider'></div>
                {!isLoading && user &&
                    <div className='max-w-2xl w-full'>
                        <button type='button' className='rounded-md border-3 border-red-300 cursor-pointer bg-linear-to-br from-slate-400 to-slate-800 py-2 px-3 text-white' onClick={handleLogout}>Log out</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default ProfileCard

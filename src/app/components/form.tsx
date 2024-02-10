'use client';
import Image from "next/image";

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';


export default function Form() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
    
    return (
        <main>
            <div className="w-screen flex mt-5 mb-32 justify-center"><img src="https://placehold.co/800x500" alt="logo" width={800} height={500}/></div>
            <form></form>
            <div className="flex justify-center mt-10 mb-12">
                <div className="grid grid-cols-3 gap-4 items-center mr-4 text-right">

                    <div><p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mr-5">Login</p></div>
                    <div><input type="text" id="login" name="login" size={50} className="border border-black text-white-900 text-sm rounded-lg focus:ring-black focus:border-black-500 block w-full p-2.5"/></div>
                    <div>{/*IMAGE TUTO*/}</div>
                    <div><p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mr-5 ">Mot de passe</p></div>
                    <div><input type="password" id="password" name="password" size={50} className="border border-black text-white-900 text-sm rounded-lg focus:ring-black focus:border-black-500 block w-full p-2.5"/></div>

                </div>
                <div className="flex items-center justify-center mt-5"><input type="submit" value="Connexion" className="flex text-black hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 leading-tight tracking-tight"/> </div>
                <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                    {errorMessage && (
                        <>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
            
        </main>
    );
}
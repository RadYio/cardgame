'use client';
import Image from "next/image";


export default function Form() {
    function ConnexionGogo() {
        // @ts-ignore
        var login = document.getElementById('login').value;
        // @ts-ignore
        var pdw = document.getElementById('pdw').value;
        // Verification des valeurs
        if (login === 'admin' && pdw === 'admin') {
            // Redirection vers la page d'accueil
            window.location.href = '/';
        } else {
            // Affichage d'un message d'erreur
            alert('Erreur de connexion');
        }
    }
    return (
        <main>
            <div className="w-screen flex mt-5 mb-32 justify-center"><img src="https://placehold.co/800x500" alt="logo" width={800} height={500}/></div>

            <div className="flex justify-center mt-10 mb-12">
                <div className="grid grid-cols-3 gap-4 items-center mr-4 text-right">

                    <div><p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mr-5">Login</p></div>
                    <div><input type="text" id="login" name="login" size={50} className="border border-black text-white-900 text-sm rounded-lg focus:ring-black focus:border-black-500 block w-full p-2.5"/></div>
                    <div>{/*IMAGE TUTO*/}</div>
                    <div><p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mr-5 ">Mot de passe</p></div>
                    <div><input type="password" id="pdw" name="pdw" size={50} className="border border-black text-white-900 text-sm rounded-lg focus:ring-black focus:border-black-500 block w-full p-2.5"/></div>

                </div>
            </div>
            <div className="flex items-center justify-center mt-5"><button onClick={ConnexionGogo} className="flex text-black hover:bg-red-950 rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 leading-tight tracking-tight">Connexion </button></div>
        </main>
    );
}
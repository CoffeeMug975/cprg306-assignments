"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try{
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.dir(user);

    return(
        <div>
            <h1 className="text-2xl p-3">Week 10 FireBase Auth & Cloud Firebase</h1>
            
            <h2 className="ml-3 text-lg rounded px-2 py-1 ">{user ? "Hi there!" : "Please sign in"}</h2>

            {user ?(
                <div>
                    <p>Welcome! {user.displayName}</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-100 h-100" />
                    <div
                        className="p-2 text-cyan-400 hover:text-cyan-700">
                        <Link href="week-10/shopping-list">Shopping List</Link>
                    </div>
                    <button 
                        type="button" 
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 ml-5"
                        >Sign out
                    </button>
                </div>
            ) : (
                <div>
                    <button 
                        type="button" 
                        onClick={handleSignIn}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 ml-5"
                        >Sign In
                    </button>
                </div>
            )}


        </div>
    );
}
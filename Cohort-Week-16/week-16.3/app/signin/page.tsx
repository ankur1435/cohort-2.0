import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function () {
    const router = useRouter();

    return <div>
        <button onClick={async () => {
            await signIn("google");
        }}>Login with google</button>

        <button onClick={async () => {
            await signIn("github");
        }}>Login with github</button>

        <button onClick={async () => {
            const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
    </div>
} 
import { signIn } from "next-auth/react";

export default function GitHubLogin(){
    const onSubmitGithub = async () => {
    await signIn("github", {
      callbackUrl: "/dashboard"
    });
  };
    return (
        <button onClick={onSubmitGithub} className="w-full bg-gray-700 hover:bg-gray-600 mt-3 p-3 rounded font-semibold flex items-center justify-center space-x-2">
            <span>Connect with GitHub</span>
          </button>
    );
}

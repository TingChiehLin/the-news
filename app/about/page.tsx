import { NextPage } from "next";

const About:NextPage = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-12 md:px-6 lg:px-0">
            <h1 className="text-4xl font-semibold text-teal-700">About</h1>
            <p className="mt-4 text-sm md:text-base">My name is <span className="font-semibold">Ting Chieh Lin</span>. I am passionate about technology and UX/UI in order to make users with enjoyable experience.</p> 
        </div>
    )
}

export default About;   
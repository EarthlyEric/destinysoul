import Image from "next/image";

export default function ProjectCard(Props: {image:string, title:string, description:string }) {
    return (
        <div className="bg-white rounded-md shadow-lg text-black border-4 border-black">
            <Image width={1360} height={480} src={Props.image} alt={Props.title} className="w-full h-32 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-semibold">{Props.title}</h2>
                <p className="mt-2 text-gray-600">{Props.description}</p>
            </div>
        </div>
    );
}
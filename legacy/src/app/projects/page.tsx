import ProjectCard from "../components/widgets/project";

export default function Projects() {
    return (
        <div>
            <section id="projects" className="w-full h-screen flex justify-center bg-blue-100 pt-32">
                <div className="px-10 py-12 grid grid-cols-1 gap-4 h-1/2 place-content-center rounded-xl backdrop-blur-sm bg-white/30">
                    <h1 className="text-black text-5xl font-bold font-mono">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ProjectCard 
                            image="https://raw.githubusercontent.com/EarthlyEric/Luminara/master/res/logo/Luminara_Banner_Github.png" 
                            title="Luminara" 
                            description="A Powerful Discord Bot, Based on Discord.py, Lavelink and MongoDB."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

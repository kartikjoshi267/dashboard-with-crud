import Sidebar from "@/components/sidebar";
import ProjectSection from "@/components/project-section";
import Topbar from "@/components/topbar";

const Home = async () => {
    return (
        <div className={'flex overflow-y-hidden'}>
            <Sidebar/>
            <div className={'flex flex-col w-full overflow-y-scroll h-screen'}>
                <Topbar/>
                <ProjectSection/>
            </div>
        </div>
    )
}
export default Home;
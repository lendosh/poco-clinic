import ClinicInfo from "@/components/clinic-info";
import HealthCareList from "@/components/health-care-list";


export default function Home() {

    return (
        <main className='flex flex-col gap-y-12 justify-center items-center'>
            <ClinicInfo/>
            <HealthCareList/>
        </main>
    );
}

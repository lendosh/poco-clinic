import ClinicInfo from "@/components/clinic-info";
import HealthCareList from "@/components/health-care-list";

export default function Home() {
  return (
    <main className="
                  flex-1 flex flex-col 
                  justify-center 
                  items-center pt-12">
    <ClinicInfo />
    <HealthCareList />
    </main>
  );
}

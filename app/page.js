import HealthCareCard from "@/components/health-care-card";

export default function Home() {
  return (
    <main className="
                  flex-1 
                  justify-center 
                  items-center pt-40">
    <HealthCareCard imageSource={'1_health.avif'} description={'Hello everybody'} />
    </main>
  );
}

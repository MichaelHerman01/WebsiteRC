import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["chemnitz"].title + " | ResearchControl",
    description: landingPages["chemnitz"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["chemnitz"]} />;
}

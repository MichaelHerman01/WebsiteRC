import { landingPages } from "@/data/landingPages";
import RegionalLandingPage from "@/components/RegionalLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: landingPages["oberkochen"].title + " | ResearchControl",
    description: landingPages["oberkochen"].metaDescription,
};

export default function Page() {
    return <RegionalLandingPage data={landingPages["oberkochen"]} />;
}

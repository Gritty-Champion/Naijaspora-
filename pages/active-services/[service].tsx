import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectUserInfos from "@/components/CollectUserInfos";
import { AuthGuard } from "@/components/AuthGuard";
import { path } from "@/routes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductTyping } from "@/providers/ProductsProvider";
import { useProducts } from "@/hooks/useProducts";

// Map URL slugs to ProductTyping
const serviceTypeMap: Record<string, ProductTyping> = {
  "funding": ProductTyping.LOAN_POF,
  "interview-preps": ProductTyping.VISA_PREPS,
  "agents": ProductTyping.AGENT_VERIFICATION,
  "verify-documents": ProductTyping.DOCUMENTS_VERIFICATION,
  "report": ProductTyping.SCAM_ALERT,
  "denial": ProductTyping.POST_VISA_DENIAL,
  "consultations": ProductTyping.CONSULTATION,
  "post-relocation": ProductTyping.POST_RELOCATION,
  "project-management": ProductTyping.DIASPORA_PROJECT,
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;
  const { setProductType, submitSuccess } = useProducts();
  const [collectInfo, setCollectInfo] = useState<boolean>(false);

  useEffect(() => {
    if (service && typeof service === "string") {
      const productType = serviceTypeMap[service];

      if (productType) {
        // Set the product type and open the collection modal
        setProductType(productType);
        setCollectInfo(true);
      } else {
        // Invalid service, redirect to all services
        router.push(path.activeServices);
      }
    }
  }, [service, setProductType, router]);

  useEffect(() => {
    // Redirect back to all services on successful submission
    if (submitSuccess) {
      setCollectInfo(false);
      router.push(path.activeServices);
    }
  }, [submitSuccess, router]);

  return (
    <div className="bg-white font-montserrat">
      <Header isHeroInView={false} />
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading service...</p>
        </div>
      </main>
      <Footer />

      <CollectUserInfos open={collectInfo} />
    </div>
  );
};

export default AuthGuard(ServicePage, { redirectTo: path.login });

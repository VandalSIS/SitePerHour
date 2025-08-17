import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[url('/hero-bg.svg')] bg-cover bg-center relative py-16 px-4">
      {/* Particles overlay */}
      <ParticlesBackground />

      <div className="container-custom max-w-4xl mx-auto relative z-10">
        <Link to="/">
          <Button variant="ghost" className="mb-8 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-primary">Terms & Conditions</h1>
        
        <div className="space-y-8 text-white/90 bg-black/20 backdrop-blur-[2px] p-8 rounded-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, 
              non-commercial transitory viewing only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby 
              disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
            <p>
              In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data 
              or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant 
              that any of the materials on our website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. 
              The inclusion of any link does not imply endorsement by us of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Modifications</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website, you are agreeing 
              to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the 
              exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <div className="text-sm text-white/80 mt-8">
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 
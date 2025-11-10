import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import TrustBadge from "@/components/TrustBadge";
import { Heart, Shield, Clock, Home, Pill, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "About Grace | Experienced Pet Sitter in Ashford, Kent",
  description: "Meet Grace, a devoted animal lover with over 15 years of pet care experience in Ashford. Fully insured, reliable, and passionate about caring for your pets.",
};

export default function About() {
  return (
    <div>
      <PageHeader
        title="About me"
        subtitle="A devoted animal lover treating every pet with joyful care and respect"
        variant="gradient"
      />

      {/* Grace's Story */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Heartpaws */}
        <div className="absolute -top-10 -left-20 w-[300px] h-[300px] opacity-[0.23] pointer-events-none -rotate-[25deg] -z-10">
          <Image
            src="/images/heartpaw.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 -right-32 w-[340px] h-[340px] opacity-[0.21] pointer-events-none rotate-[40deg] -z-10">
          <Image
            src="/images/heartpaw.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg"
                alt="Person caring for pets"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Hi, I&rsquo;m Grace
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  I&rsquo;m a devoted animal lover who treats all pets whether big, small, furry or feathered, with the same joyful care and respect.
                </p>
                <p>
                  I offer dog walking, cheerful drop in visits and trusted pet sitting so your companion gets the care, attention, and exercise they need. You&rsquo;ll also get peace of mind that they&rsquo;re in a safe and caring pair of hands while you&rsquo;re away.
                </p>
                <p>
                  With over 15 years of experience caring for pets across Ashford and the surrounding villages, I understand that every animal is unique. I take the time to learn your pet&rsquo;s routines, preferences, and personality, ensuring they feel comfortable and loved in my care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Grace */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Why pet owners trust me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrustBadge
              icon={Clock}
              title="15+ Years Experience"
              description="Caring for pets of all types, sizes, and temperaments"
            />
            <TrustBadge
              icon={Shield}
              title="Fully Insured"
              description="Professional insurance for complete peace of mind"
            />
            <TrustBadge
              icon={Heart}
              title="Genuine Pet Lover"
              description="Every pet receives the same love I'd give my own"
            />
            <TrustBadge
              icon={Home}
              title="Home Comfort"
              description="Your pets stay in their familiar, safe environment"
            />
            <TrustBadge
              icon={Pill}
              title="Medication Experienced"
              description="Comfortable administering all types of medication"
            />
            <TrustBadge
              icon={Camera}
              title="Daily Updates"
              description="Photos and videos so you never miss a moment"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Heartpaw */}
        <div className="absolute top-1/2 -left-28 w-[280px] h-[280px] opacity-[0.19] pointer-events-none rotate-[15deg] -z-10">
          <Image
            src="/images/heartpaw.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center font-heading">
            My commitment to your pets
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                Individual Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every pet is different, and I tailor my approach to suit their unique personality, needs, and routines. Whether your pet is energetic or anxious, young or elderly, I provide the care they deserve.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                Reliability You Can Count On
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When you book with me, you can trust that I&rsquo;ll be there. I understand how important your pet is to you, and I treat every booking with the professionalism and dedication it deserves.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream">
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                Transparent Communication
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I believe in keeping you informed and reassured. You&rsquo;ll receive daily photo and video updates, and I&rsquo;m always available to answer questions or address any concerns about your pet&rsquo;s care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
            Let&rsquo;s Talk About Your Pet&rsquo;s Needs
          </h2>
          <p className="text-xl mb-8 text-white/90">
            I&rsquo;d love to meet you and your pet. Get in touch to discuss how I can help.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

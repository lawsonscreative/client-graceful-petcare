import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustBadge from "@/components/TrustBadge";
import { Shield, Calendar, Camera, Home as HomeIcon, Clock } from "lucide-react";
import services from "@/data/services.json";
import testimonials from "@/data/testimonials.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-cream py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                Trusted pet care in Ashford
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Your pets stay happy at home with experienced, insured care
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get a quote
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View services
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg"
                alt="Happy golden retriever dog"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
              Pet care services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, reliable care tailored to your pet&rsquo;s needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                id={service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
              Why choose Graceful Pet Care?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <TrustBadge
              icon={Calendar}
              title="15+ years experience"
            />
            <TrustBadge
              icon={Shield}
              title="Fully insured"
            />
            <TrustBadge
              icon={Camera}
              title="Daily photo updates"
            />
            <TrustBadge
              icon={HomeIcon}
              title="Pets stay home"
            />
            <TrustBadge
              icon={Clock}
              title="Medication given"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
              What pet owners say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from happy clients across Ashford
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Areas serviced
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Serving Ashford and the surrounding villages. Unsure if I cover your area? Contact me to check!
          </p>

          {/* Service Area Map */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden border-2 border-primary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40233.89087847629!2d0.8487!3d51.1465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decbcfbfbfbfbf%3A0x3e7d7d7d7d7d7d7d!2sAshford%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map showing Ashford and surrounding villages"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Service area includes Ashford town centre and surrounding villages within approximately 10 miles
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading">
            Ready to book?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch today for a personalised quote and to discuss your pet&rsquo;s needs
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact me
          </Button>
        </div>
      </section>
    </div>
  );
}

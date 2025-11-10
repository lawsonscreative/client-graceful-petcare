import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { Home, Footprints, Clock, Check } from "lucide-react";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Pet Care Services | Dog Walking, Pet Sitting in Ashford",
  description: "Professional pet care services in Ashford: overnight pet sitting, dog walking, and drop-in visits. Fully insured with over 15 years experience.",
};

const iconMap = {
  home: Home,
  walk: Footprints,
  clock: Clock,
};

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Pet Care Services"
        subtitle="Tailored care for your beloved pets in the comfort of their own home"
      />

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl ${!isEven ? 'lg:order-2' : ''}`}>
                      <Image
                        src={`https://images.pexels.com/photos/${
                          service.id === 'overnight-pet-sitting' ? '7210754' :
                          service.id === 'dog-walking' ? '1108099' :
                          '2558605'
                        }/pexels-photo-${
                          service.id === 'overnight-pet-sitting' ? '7210754' :
                          service.id === 'dog-walking' ? '1108099' :
                          '2558605'
                        }.jpeg`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content */}
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                        <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
                        {service.title}
                      </h2>

                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                          What&rsquo;s Included:
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="bg-cream rounded-xl p-6 mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                          Benefits:
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/contact" size="lg">
                        Get a Quote
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-heading">
            Can&rsquo;t decide which service is right for you?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get in touch and I&rsquo;ll help you find the perfect care solution for your pet
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  );
}

import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Get a Quote for Pet Care in Ashford, Kent",
  description: "Get in touch with Graceful Pet Care for pet sitting, dog walking, and drop-in visits in Ashford. Contact hello@gracefulpetcare.co.uk for a personalized quote.",
};

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            I&rsquo;d love to hear from you and discuss how I can care for your pets
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">Email</h3>
                    <a
                      href="mailto:hello@gracefulpetcare.co.uk"
                      className="text-primary hover:underline text-lg"
                    >
                      hello@gracefulpetcare.co.uk
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">Service Area</h3>
                    <p className="text-gray-700">
                      Ashford and surrounding villages, Kent
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Not sure if I cover your area? Just ask!
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-heading">Response Time</h3>
                    <p className="text-gray-700">
                      Within 24 hours
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Usually much sooner!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  What to Include in Your Message
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Your pet&rsquo;s name, type, and age</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>The type of care you need</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Dates you require care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Any special requirements or concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Your location in Ashford</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                  Send Me a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

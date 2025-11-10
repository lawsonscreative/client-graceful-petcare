import { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import FAQItem from "@/components/FAQItem";
import faqData from "@/data/faq.json";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Pet Care Services in Ashford",
  description: "Frequently asked questions about pet sitting, dog walking, and pet care services in Ashford. Learn about coverage areas, insurance, pricing, and booking.",
};

export default function FAQ() {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about my pet care services"
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-heading">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            I&rsquo;m happy to answer any questions you have about caring for your pet
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

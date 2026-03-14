import React from 'react';
import Container from '../layout/Container';
import SectionHeader from '../common/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "The strategic digital transformation provided by Corporate Inc. allowed us to scale our operations by 300% without increasing overhead. Their architecture is flawless.",
    author: "Sarah Jenkins",
    role: "CTO, TechLogistics Global"
  },
  {
    quote: "Finding a partner that understands enterprise-level security and responsive design was tough until we found this team. They delivered on every promise.",
    author: "Marcus Chen",
    role: "VP Engineering, FinBank Platform"
  },
  {
    quote: "Their cloud infrastructure solutions migrated our legacy systems to AWS seamlessly with zero downtime. We couldn't be happier with their professionalism.",
    author: "Elena Rodriguez",
    role: "Director of IT, HealthPlus Analytics"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-[#f0f4f8]">
      <Container>
        <SectionHeader 
          title="What Our Clients Say" 
          subtitle="Success Stories" 
        />
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-10 md:p-14 text-center border-t-4 border-[var(--color-siemens-primary)] shadow-lg mx-4 md:mx-0">
                  <svg className="w-12 h-12 text-gray-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl text-slate-700 italic mb-8 font-serif leading-relaxed">
                    "{test.quote}"
                  </p>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg">{test.author}</h5>
                    <span className="text-sm text-[var(--color-siemens-primary)] font-semibold uppercase tracking-wider">{test.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

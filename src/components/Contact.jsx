import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Hubungi Saya</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto text-center">
            Saya selalu terbuka untuk diskusi dan pertanyaan. Jangan
            ragu untuk menghubungi saya melalui informasi kontak di bawah ini.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* wrapper card */}
          <div className="card bg-base-100 shadow-xl">
            {/* card body */}
            <div className="card-body">
              {/* header card */}
              <h3 className="card-title text-2xl mb-6">Informasi Kontak</h3>

              <div className="space-y-4">
                {/* card 1 */}
                <div className="flex items-center gap-4">
                  <div className="btn btn-circle btn-primary btn-sm">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-base-content/70">
                      rayhanardian045@gmail.com
                    </p>
                  </div>
                </div>


                {/* card 3 */}
                <div className="flex items-center gap-4">
                  <div className="btn btn-circle btn-accent btn-sm">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Lokasi</p>
                    <p className="text-base-content/70">Sleman, Yogyakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import * as Icons from "lucide-react";

export const ContactSection = ({ data = [] }) => {
  if (!data.length) return null;

  // بيانات التواصل الرئيسية بدون السوشيال
  const mainContacts = data.filter(
    (item) =>
      item.type !== "whatsapp" &&
      item.type !== "github" &&
      item.type !== "linkedin"
  );

  // روابط السوشيال فقط
  const socialLinks = data.filter(
    (item) =>
      item.type === "linkedin" ||
      item.type === "github" ||
      item.type === "whatsapp"
  );

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {mainContacts.map((item) => {
              const Icon = Icons[item.icon] || Icons.Mail;
              const isLink = item.type === "email" || item.type === "phone";

              return (
                <div key={item.id} className="flex flex-col items-center space-y-3">
                  <div className="p-4 rounded-full bg-primary/10 inline-block">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold">{item.label}</h4>
                  {isLink ? (
                    <a
                      href={
                        item.type === "email"
                          ? `mailto:${item.value}`
                          : `tel:${item.value}`
                      }
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* روابط التواصل الاجتماعي */}
          <div className="pt-12">
            <h4 className="font-medium mb-6 text-center">Contact With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((item) => {
                const Icon = Icons[item.icon] || Icons.Link;
                return (
                  <a
                    key={item.id}
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

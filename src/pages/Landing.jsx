
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  ChevronRight, 
  Calendar, 
  ThumbsUp,
  Sparkles,
  PaintBucket,
  Droplets,
  Scissors,
  ShieldCheck
} from "lucide-react";

export default function Landing() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const beforeAfterRef = useRef(null);
  
  useEffect(() => {
    // וידאו אוטומטי
    const videoElement = document.getElementById('background-video');
    if (videoElement) {
      videoElement.play().catch(e => console.log('אוטו-פליי לא נתמך:', e));
    }
    
    // אנימציית עלים נופלים
    initFallingLeaves();
    
    // אינטרוול לקרוסלת תמונות
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן היינו שולחים את הנתונים לשרת במערכת אמיתית
    console.log({ name, phone, email, message });
    setSubmitted(true);
    // איפוס הטופס
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    
    // הצגת הודעת תודה למשך 5 שניות
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  const initFallingLeaves = () => {
    // אנימציית עלים בסיסית בצד הקליינט
    const leafContainer = document.querySelector('.leaf-container');
    if (!leafContainer) return;
    
    for (let i = 0; i < 15; i++) {
      createLeaf(leafContainer);
    }
  };
  
  const createLeaf = (container) => {
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    leaf.style.left = `${Math.random() * 100}%`;
    leaf.style.animationDuration = `${Math.random() * 10 + 10}s`;
    leaf.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(leaf);
    
    // הסרת העלה אחרי שהאנימציה מסתיימת
    leaf.addEventListener('animationend', () => {
      leaf.remove();
      createLeaf(container);
    });
  };
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1626253845953-1ac326615054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",  // תמונה חדשה לפרויקט 3
    "https://images.unsplash.com/photo-1605059910848-7f78fa23ed50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"   // תמונה חדשה לפרויקט 6
  ];
  
  const services = [
    {
      title: "עיצוב גינות פרטיות וציבוריות",
      description: "תכנון מקצועי המשלב אסתטיקה, פונקציונליות וחיבור לטבע",
      icon: <PaintBucket className="h-10 w-10" />
    },
    {
      title: "מערכות השקיה חוסכות מים",
      description: "תכנון והתקנה של מערכות השקיה חכמות וידידותיות לסביבה",
      icon: <Droplets className="h-10 w-10" />
    },
    {
      title: "תחזוקה שוטפת וגיזום",
      description: "שירותי אחזקה קבועים לשמירה על גינה מטופחת לאורך זמן",
      icon: <Scissors className="h-10 w-10" />
    }
  ];
  
  const benefits = [
    {
      title: "פגישת ייעוץ חינם באתר",
      description: "אנו מגיעים אליכם לפגישה ללא התחייבות לבחינת הצרכים והאפשרויות",
      icon: <Calendar className="h-7 w-7" />
    },
    {
      title: "אחריות שנתיים על צמחייה",
      description: "אנו עומדים מאחורי העבודה שלנו עם אחריות מקיפה על כל הצמחייה שנשתלה",
      icon: <ShieldCheck className="h-7 w-7" />
    },
    {
      title: "ניסיון של 15 שנה",
      description: "צוות מקצועי ומיומן עם שנים של ניסיון בתכנון וביצוע פרויקטים",
      icon: <ThumbsUp className="h-7 w-7" />
    }
  ];
  
  const sliderImages = [
    {
      before: "https://images.unsplash.com/photo-1489435518427-e047d52082f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      before: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      before: "https://images.unsplash.com/photo-1599685315640-4cbebf2d0c55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1626253845953-1ac326615054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <div className="rtl" style={{ direction: 'rtl' }}>
      {/* סגנון CSS מותאם */}
      <style jsx>{`
        :root {
          --primary: #388E3C;
          --secondary: #FFC107;
          --background: #E8F5E9;
          --button: #43A047;
          --text: #2E7D32;
        }
        
        .rtl {
          direction: rtl;
          text-align: right;
        }
        
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: -1;
        }
        
        .section-heading {
          position: relative;
          display: inline-block;
        }
        
        .section-heading::after {
          content: '';
          position: absolute;
          bottom: -10px;
          right: 0;
          width: 60px;
          height: 3px;
          background-color: var(--secondary);
        }
        
        .service-card {
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          border-bottom: 3px solid var(--secondary);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .leaf-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        
        .falling-leaf {
          position: absolute;
          width: 20px;
          height: 20px;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23388E3C"><path d="M6.05 19.85C11.19 19.85 15.35 15.69 15.35 10.55C15.35 5.41 11.19 1.25 6.05 1.25C0.91 1.25 2 2.23 2 3.75V16.35C2 18.43 4.05 19.85 6.05 19.85ZM17.71 7.72C17.3 7.31 16.7 7.25 16.22 7.59C15.74 7.93 15.68 8.53 16.09 8.94C17.9 10.75 17.9 13.69 16.09 15.5C14.28 17.31 11.34 17.31 9.53 15.5C9.12 15.09 8.52 15.03 8.04 15.37C7.56 15.71 7.5 16.31 7.91 16.72C10.5 19.31 14.79 19.31 17.38 16.72C19.97 14.13 19.97 9.84 17.38 7.25C17.38 7.25 17.71 7.58 17.71 7.72Z"/></svg>');
          background-size: contain;
          animation: fallingLeaf 15s linear infinite;
          z-index: 1;
        }
        
        @keyframes fallingLeaf {
          0% {
            transform: translateY(-5%) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .before-after-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-radius: 8px;
        }
        
        .before-after-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          overflow: hidden;
        }
        
        .slider-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background-color: white;
          cursor: ew-resize;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .slider-handle::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        
        .slider-handle::before {
          content: '⇄';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--primary);
          font-size: 20px;
          font-weight: bold;
          z-index: 3;
        }
        
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-auto-rows: 0;
          grid-gap: 15px;
        }
        
        .masonry-item {
          grid-row-end: span 1;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .masonry-item:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .contact-card {
          background: linear-gradient(135deg, #ffffff 0%, #f2f9f1 100%);
        }
        
        .cta-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateX(-100%);
          transition: all 0.3s ease;
        }
        
        .cta-button:hover::after {
          transform: translateX(0);
        }
      `}</style>
    
 {/* סקשן הירו בלבד */}
<section className="relative h-screen flex items-center justify-center">
  <div className="absolute inset-0 z-[-2]" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1584479898061-15742e14f50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}/>
  <div className="overlay"></div>
  <div className="leaf-container"></div>
  
  <div className="text-white mx-auto px-4 container z-10 text-center">
    <Leaf className="h-10 w-10 text-white mb-4 inline-block" />
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
      גן נוף ירושלים
    </h1>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
      תכנון ועיצוב גינות בירושלים – פגישת ייעוץ חינם
    </h2>
    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      הפכו את החלום לגינה מושלמת עם צוות המומחים שלנו. אנו מתמחים בעיצוב, הקמה ותחזוקה של גינות ייחודיות שישנו את המרחב שלכם.
    </p>
    <Button 
      className="cta-button text-lg bg-[#43A047] hover:bg-[#2E7D32] text-white px-8 py-6 rounded-xl text-xl shadow-lg"
      onClick={() => {
        document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
      }}
    >
      השאירו פרטים לפגישת ייעוץ
      <ChevronRight className="h-5 w-5 mr-2" />
    </Button>
  </div>
</section>

      
      {/* סקשן שירותים */}
      <section className="py-20 bg-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">השירותים שלנו</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="p-4 rounded-full bg-[#E8F5E9] mb-6 text-[#388E3C]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2E7D32]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* סקשן יתרונות */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">למה לבחור בנו?</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start"
              >
                <div className="p-3 rounded-full bg-[#E8F5E9] mr-4 text-[#388E3C] shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#2E7D32]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* סקשן לפני ואחרי */}
      <section className="py-20 bg-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">לפני ואחרי</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video mb-10">
              {sliderImages.map((slide, index) => (
                <div 
                  key={index} 
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="before-after-container h-full">
                    <img 
                      src={slide.after}
                      alt="אחרי"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="before-after-slider" style={{ width: '50%' }}>
                      <img 
                        src={slide.before}
                        alt="לפני"
                        className="absolute top-0 left-0 w-[200%] h-full object-cover"
                      />
                    </div>
                    <div className="slider-handle"></div>
                    <div className="absolute top-5 left-5 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg text-sm">
                      לפני
                    </div>
                    <div className="absolute top-5 right-5 bg-[#388E3C] text-white px-4 py-2 rounded-lg text-sm">
                      אחרי
                    </div>
                  </div>
                </div>
              ))}
              
              {/* מחווני החלקה */}
              <div className="absolute -bottom-8 left-0 w-full flex justify-center gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#388E3C]' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-center text-gray-600 mb-10">
              הזיזו את המחוון מצד לצד כדי לראות את ההבדל. אנו מתמחים בהפיכת
              חצרות מוזנחות לגינות חלומיות המעניקות ערך מוסף לנכס שלכם.
            </p>
          </div>
        </div>
      </section>
      
      {/* סקשן גלריית תמונות */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">הפרויקטים שלנו</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="masonry-item overflow-hidden rounded-lg shadow-md bg-white transform transition-all hover:scale-[1.02]"
              >
                <img 
                  src={image}
                  alt={`פרויקט גינה ${index + 1}`}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* סקשן וידאו מוטמע */}
      <section className="py-20 bg-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">צפו בנו בפעולה</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="פרויקט גינון מיוחד"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* סקשן טופס יצירת קשר */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-[#2E7D32] section-heading">השאירו פרטים</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#2E7D32]">צרו איתנו קשר</h3>
              <p className="text-gray-600 mb-8">
                מעוניינים בייעוץ חינם או בקבלת הצעת מחיר? השאירו פרטים ונחזור אליכם בהקדם.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#E8F5E9] mr-4 text-[#388E3C]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600">טלפון</p>
                    <p className="font-bold">02-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#E8F5E9] mr-4 text-[#388E3C]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600">אימייל</p>
                    <p className="font-bold">info@gan-nof.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-[#E8F5E9] mr-4 text-[#388E3C]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-600">כתובת</p>
                    <p className="font-bold">רחוב יפו 123, ירושלים</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-card p-8 rounded-xl shadow-lg">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="p-4 rounded-full bg-[#E8F5E9] mb-6 text-[#388E3C]">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#2E7D32]">תודה רבה!</h3>
                  <p className="text-gray-600">
                    פנייתך התקבלה. נציג שלנו יחזור אליך בהקדם.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-[#2E7D32] mb-2">שם מלא</label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-[#388E3C]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-[#2E7D32] mb-2">טלפון</label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-[#388E3C]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#2E7D32] mb-2">אימייל</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-[#388E3C]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#2E7D32] mb-2">הודעה</label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border-[#388E3C] min-h-[120px]"
                      placeholder="ספרו לנו בקצרה על הפרויקט"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="cta-button w-full bg-[#43A047] hover:bg-[#2E7D32] text-white py-6 rounded-xl text-xl shadow-md"
                  >
                    שליחת פרטים
                    <Sparkles className="h-5 w-5 mr-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* פוטר */}
      <footer className="py-10 bg-[#2E7D32] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Leaf className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">גן נוף ירושלים</h3>
            </div>
            
            <p className="text-sm opacity-80">
              © כל הזכויות שמורות לגן נוף ירושלים {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { useRef, useState, useEffect, useCallback, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    role: "Project Manager",
    company: "Innovatech",
    project: "E-commerce Platform",
    testimonial:
      "Sanskar is a remarkable developer. His attention to detail and problem-solving skills were crucial for our project's success. The final product exceeded our expectations.",
    image: "https://i.pravatar.cc/150?u=aarav",
    linkedin: "https://linkedin.com/in/aaravsharma",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "UX/UI Designer",
    company: "Creative Minds",
    project: "Mobile App Design",
    testimonial:
      "Working with Sanskar was a pleasure. He has a great eye for design and was able to translate our complex design concepts into a smooth, responsive user interface.",
    image: "https://i.pravatar.cc/150?u=priya",
    linkedin: "https://linkedin.com/in/priyasingh",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Startup Founder",
    company: "NextGen Solutions",
    project: "MVP Development",
    testimonial:
      "As a startup, we needed to move fast without compromising on quality. Sanskar delivered a high-quality MVP on a tight deadline. Highly recommended for his skills and professionalism.",
    image: "https://i.pravatar.cc/150?u=rohan",
    linkedin: "https://linkedin.com/in/rohanmehta",
    rating: 5,
  },
  {
    name: "Anika Gupta",
    role: "Digital Marketer",
    company: "Growthify",
    project: "Landing Page Optimization",
    testimonial:
      "Sanskar's technical expertise in frontend optimization significantly improved our page load times and conversion rates. He's a proactive and communicative developer.",
    image: "https://i.pravatar.cc/150?u=anika",
    linkedin: "https://linkedin.com/in/anikagupta",
    rating: 5,
  },
  {
    name: "Vikram Kumar",
    role: "Backend Engineer",
    company: "DataCore",
    project: "API Integration",
    testimonial:
      "Sanskar's frontend skills are top-notch. He integrated with our backend APIs seamlessly and was always quick to adapt to changes. A true team player.",
    image: "https://i.pravatar.cc/150?u=vikram",
    linkedin: "https://linkedin.com/in/vikramkumar",
    rating: 5,
  },
];

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="testimonial-card"
      style={{
        flex: "0 0 auto",
        width: "clamp(300px, 90vw, 380px)",
        background: "var(--glass)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
      
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid var(--accent)" }}
        />
        <div>
          <h4 style={{ margin: 0, color: "var(--text-primary)", fontSize: 15, fontWeight: 600 }}>
            {item.name}
          </h4>
          <p style={{ margin: "2px 0 0", color: "var(--muted)", fontSize: 13 }}>
            {item.role}, {item.company}
          </p>
        </div>
      </div>
      <div>
        <p style={{ margin: 0, color: "var(--text-primary)", fontSize: 14, lineHeight: 1.6, fontStyle: "italic" }}>
          "{item.testimonial}"
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 8 }}>
        <div style={{ fontSize: 12, color: "var(--muted)", background: "rgba(255,255,255,0.03)", padding: "4px 8px", borderRadius: 6, border: "1px solid var(--border)" }}>
          Project: <strong>{item.project}</strong>
        </div>
        <a
          href={item.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
          style={{
            color: "var(--accent)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <i className="fab fa-linkedin" style={{ fontSize: 16 }} />
          <span>Profile</span>
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [didDrag, setDidDrag] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const velocity = useRef(0); // For momentum
  const lastMoveTime = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const stopMomentumScroll = useCallback(() => {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
      velocity.current = 0;
    }
  }, []);

  const handleDragStart = useCallback((pageX: number) => {
    if (!scrollContainerRef.current) return;
    stopMomentumScroll();
    setIsDragging(true);
    setDidDrag(false);
    startX.current = pageX - scrollContainerRef.current.offsetLeft;
    startScrollLeft.current = scrollContainerRef.current.scrollLeft;
    velocity.current = 0;
    lastMoveTime.current = performance.now();
  }, [stopMomentumScroll]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (didDrag && scrollContainerRef.current) {
      const momentumScroll = () => {
        if (Math.abs(velocity.current) < 0.5) {
          stopMomentumScroll(); // Stop when velocity is low
          return;
        }
        scrollContainerRef.current!.scrollLeft += velocity.current;
        velocity.current *= 0.94; // Friction
        animationFrame.current = requestAnimationFrame(momentumScroll); // Continue scroll
      };
      momentumScroll();
    }
  }, [didDrag, stopMomentumScroll]);

  const handleDragMove = useCallback((pageX: number) => {
    if (!isDragging || !scrollContainerRef.current) return;
    // e.preventDefault() is implicitly handled by passive: false in addEventListener
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX.current;
    if (!didDrag && Math.abs(walk) > 5) { // Drag threshold
      setDidDrag(true);
    }

    const newScrollLeft = startScrollLeft.current - walk * 1.5; // Scroll-speed multiplier
    const currentTime = performance.now();
    const deltaTime = currentTime - lastMoveTime.current;
    
    if (deltaTime > 0) {
      const newVelocity = (scrollContainerRef.current.scrollLeft - newScrollLeft) / deltaTime; // pixels per ms
      velocity.current = 0.7 * newVelocity + 0.3 * velocity.current; // Smoothing
    }
    
    scrollContainerRef.current.scrollLeft = newScrollLeft;
    lastMoveTime.current = currentTime;
  }, [isDragging, didDrag]);

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => handleDragStart(e.pageX);
  const handleMouseMove = (e: MouseEvent) => handleDragMove(e.pageX);
  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => handleDragStart(e.touches[0].pageX);
  const handleTouchMove = (e: TouchEvent) => { if (isDragging) handleDragMove(e.touches[0].pageX); };

  // Prevent link clicks on drag
  const handleClickCapture = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    if (didDrag) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, [didDrag]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      stopMomentumScroll();
    };
  }, [isDragging, handleDragMove, handleDragEnd, stopMomentumScroll]);

  return (
    <section id="testimonials" className="section-divider">
      <style>{`
        .testimonial-scroll-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .testimonial-scroll-container::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, and Opera */
        }
        .testimonial-scroll-container { 
          cursor: grab;
          scroll-behavior: auto; /* Disable smooth scrolling for drag */
        }
        .testimonial-scroll-container.dragging {
          cursor: grabbing;
          user-select: none;
        }
        .testimonial-card {
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
        }
        .linkedin-button:hover {
          text-decoration: underline;
        }
      `}</style>
      <div style={{ marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, color: "var(--text-primary)" }}>Testimonials</h2>
          <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 4 }}>What others say about my work</div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className={`testimonial-scroll-container ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClickCapture={handleClickCapture}
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          padding: "8px 4px 16px 4px",
          scrollSnapType: "x mandatory",
        }}
      >
        {TESTIMONIALS.map((item) => (
          <div key={item.name} style={{ scrollSnapAlign: "start" }}>
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
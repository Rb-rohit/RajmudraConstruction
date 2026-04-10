import jsPDF from "jspdf";
import assets from "../assets/assets";

const downloadPDF = async () => {
  const doc = new jsPDF("p", "mm", "a4");

  const orange = [249, 115, 22];
  const dark = [30, 30, 30];

  const addWatermark = (doc, logo) => {
  doc.setGState(new doc.GState({ opacity: 0.08 }));

  doc.addImage(logo, "PNG", 40, 80, 130, 130);

  doc.setGState(new doc.GState({ opacity: 1 }));
};

  //  LOAD IMAGE
  const loadImage = (url) =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;
      img.onload = () => resolve(img);
    });

    const logo = await loadImage(assets.footer);
 //  HEADER BACKGROUND STRIP
doc.setFillColor(249, 115, 22);
doc.rect(0, 0, 210, 30, "F");

//  LOGO (LEFT)
doc.addImage(logo, "PNG", 10, 5, 40, 20);

// COMPANY NAME (RIGHT SIDE OF LOGO)
doc.setTextColor(255, 255, 255);
doc.setFontSize(18);
doc.text("RAJMUDRA CONSTRUCTION", 60, 18);

//  TAGLINE
doc.setFontSize(10);
doc.text("Building Excellence & Trust", 60, 25);


  const img1 = await loadImage(
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
  );

  const img2 = await loadImage(
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
  );

  // =========================
  //  PAGE 1 (ULTRA COVER)
  // =========================

  addWatermark(doc, logo);

  //  Diagonal background effect
  doc.setFillColor(...orange);
  doc.triangle(0, 0, 210, 0, 0, 300, "F");

  // Dark overlay
  doc.setFillColor(...dark);
  doc.triangle(210, 0, 210, 150, 80, 0, "F");

  //  LOGO
  doc.addImage(logo, "JPEG", 15, 15, 60, 30);

  //  TITLE
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.text("RAJMUDRA", 20, 70);
  doc.text("CONSTRUCTION", 20, 85);

  doc.setTextColor(255, 200, 150);
  doc.text("SERVICE", 20, 100);

  // TAGLINE
  doc.setFontSize(12);
  doc.setTextColor(240, 240, 240);
  doc.text(
    "Building excellence with innovation, quality, and trust.",
    20,
    115,
    { maxWidth: 100 }
  );

  //  IMAGE RIGHT SIDE
  doc.addImage(img1, "JPEG", 80, 160, 120, 100);

  // =========================
  //  PAGE 2 (ABOUT)
  // =========================

  doc.addPage();

  addWatermark(doc, logo);

  doc.setFontSize(22);
  doc.setTextColor(...orange);
  doc.text("About Company", 20, 50); 

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);

  doc.text(
    "Rajmudra Construction is a leading firm specializing in residential and commercial projects. Our focus is delivering quality work with modern techniques and timely completion.",
    20,
    60,
    { maxWidth: 170 }
  );

  // Side color strip
  doc.setFillColor(...orange);
  doc.rect(0, 0, 10, 297, "F");

  // =========================
  //  PAGE 3 (SERVICES + PROJECTS)
  // =========================

  doc.addPage();

  addWatermark(doc, logo);
  

  doc.setFontSize(20);
  doc.setTextColor(...orange);
  doc.text("Our Services", 20, 30);

  const services = [
    "Residential Construction",
    "Commercial Projects",
    "Interior Design",
    "Renovation",
    "Turnkey Projects",
  ];

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);

  services.forEach((s, i) => {
    doc.text(` ${s}`, 20, 45 + i * 10);
  });

  // Projects image
  doc.addImage(img2, "JPEG", 20, 110, 170, 80);

  // =========================
  // PAGE 4 (STATS + CONTACT)
  // =========================

  doc.addPage();

  addWatermark(doc, logo);

  doc.setFillColor(...orange);
  doc.rect(0, 0, 210, 50, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text("Company Highlights", 20, 30);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);

  doc.text("5+ Years Experience", 20, 70);
  doc.text("200+ Projects Completed", 20, 85);
  doc.text("98% On-Time Delivery", 20, 100);
  doc.text("100% Client Satisfaction", 20, 115);

  // CONTACT
  doc.setFontSize(18);
  doc.setTextColor(...orange);
  doc.text("Contact Us", 20, 160);

  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text("Phone:-", 20, 170);
  doc.text(" +91 9876543210", 39, 175);
  doc.text("+91 9764346394", 40, 185);        
  doc.text("+91 8668490973", 40, 195);

  doc.setTextColor(0, 0, 0);
  doc.text("Address:-", 20, 205);
  doc.text(" Rajmudra Projects & Construction pvt.lmt", 50, 210);
  doc.text(" ITI Square, behind the Government Library,", 50, 220);
  doc.text(" Gadchiroli- 442605 Maharashtra", 50, 230);
  doc.text("Email:-", 20, 240);
  doc.text(" rajmudraprojectgad01@gmail.com", 49, 245);
  
  doc.text("Web site:-", 20, 255);
  doc.text("Rajmudra.com", 50, 260);

  // =========================
  //  SAVE
  // =========================

  doc.save("Rajmudra.pdf");
};

export default downloadPDF;
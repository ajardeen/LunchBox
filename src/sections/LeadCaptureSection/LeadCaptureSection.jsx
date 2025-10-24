import { useState, useEffect } from "react";
import TailwindButton from "../../components/TailwindButton";
import { motion, AnimatePresence } from "framer-motion";
// 1. IMPORT Firestore functions and your DB reference
import { db } from "../../configs/firebase"; // Adjust path as necessary
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { BsInstagram } from "react-icons/bs";

function LeadCaptureSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

  // Countdown timer for returning to the form
  useEffect(() => {
    let timer;
    if (showSuccessScreen) {
      timer = setTimeout(() => {
        setShowSuccessScreen(false);
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccessScreen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    // Validation
    if (!email.trim() && !phoneNumber.trim()) {
      setError("Please provide at least an email or a phone number.");
      setLoading(false);
      return;
    }
    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        setLoading(false);
        return;
      }
    }
    if (phoneNumber.trim()) {
      const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneNumber)) {
        setError("Please enter a valid Indian phone number.");
        setLoading(false);
        return;
      }
    }

    try {
      // No duplicate check, just add the new lead
      const leadsRef = collection(db, "lunchboxleads");
      const leadData = {
        name: name.trim(),
        email: email.trim() || null,
        phoneNumber: phoneNumber.trim() || null,
        createdAt: Timestamp.now(),
      };
      await addDoc(leadsRef, leadData);
      setSuccessMessage("Thank you! We'll notify you at launch.");

      setShowSuccessScreen(true);
      setName("");
      setEmail("");
      setPhoneNumber("");
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="leadcapturesection"
      className="my-10 py-16 px-6 md:px-16 rounded-3xl flex flex-col items-center justify-center min-h-[90vh]"
      style={{
        backgroundColor: "var(--color-background)",
        backgroundImage: "url(./images/leadGenerateBG.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md flex flex-col items-center justify-center min-h-[600px]">
        <AnimatePresence mode="wait">
          {showSuccessScreen ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-center flex flex-col items-center w-full"
            >
              <img
                src="/images/LunchBoxLegends.svg"
                alt="logo"
                className="w-40 mb-4"
              />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
                Success!
              </h2>
              <p
                className="max-w-md mb-6"
                style={{ color: "var(--color-foreground)" }}
              >
                {successMessage}
              </p>
                {/* Socials */}
            <div className="flex flex-col items-left gap-2 pb-10">
              <span className="font-bold">Follow us:</span>
              <a
                href="https://www.instagram.com/lunchbox__legends"
                target="_blank"
                rel="noopener noreferrer"
                className="flex border p-1 px-2 rounded-full hover:bg-pink-50 items-center gap-2 hover:opacity-80 transition-opacity text-pink-800"
              >
                <BsInstagram />
                <span className="">@lunchbox__legends</span>
              </a>
            </div>
              <TailwindButton onClick={() => setShowSuccessScreen(false)}>
                Register Another
              </TailwindButton>
              <p
                className="text-xs mt-4"
                style={{ color: "var(--color-muted)" }}
              >
                Returning to form in 10 seconds...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <img
                src="/images/LunchBoxLegends.svg"
                alt="logo"
                className="w-40 mb-4"
              />
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                style={{ color: "var(--color-foreground)" }}
              >
                Be the First to Know!
              </h2>
              <p
                className="text-center max-w-xl mb-8 text-xs sm:text-sm"
                style={{ color: "var(--color-muted)" }}
              >
                We’re cooking up something special! Sign up now to be the first
                to know when <strong>LunchBox</strong> launches in your area —
                fresh meals, fast delivery, and exclusive early-bird offers
                await
              </p>

              {/* Lead Capture Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 w-full max-w-md"
              >
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium pl-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-foreground)",
                      backgroundColor: "var(--color-background)",
                    }}
                    disabled={loading}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium pl-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-foreground)",
                      backgroundColor: "var(--color-background)",
                    }}
                    disabled={loading}
                  />
                </div>

                <div className="w-full flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium pl-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-foreground)",
                      backgroundColor: "var(--color-background)",
                    }}
                    disabled={loading}
                  />
                </div>
                <TailwindButton
                  type="submit"
                  className="px-6 py-3 w-full mt-2"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-background)",
                  }}
                  loading={loading}
                >
                  Notify Me
                </TailwindButton>
              </form>

              {/* Error message */}
              {error && (
                <p className="text-sm mt-2" style={{ color: "red" }}>
                  {error}
                </p>
              )}

              <p
                className="text-xs italic mt-4 text-center"
                style={{ color: "var(--color-muted)" }}
              >
                No spam — just launch updates.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default LeadCaptureSection;

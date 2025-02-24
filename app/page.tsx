"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


interface InterestOption {
  id: string;
  label: string;
}

interface ContactInfo {
  icon: string;
  text: string;
}

const interestOptions: InterestOption[] = [
  { id: 'uiux', label: '3D Environment Artist' },
  { id: 'web', label: 'Character & Animation ' },
  { id: 'graphic', label: 'UI/UX Designer ' },
  { id: 'system', label: 'AI/NPC Behavior Programmer' },
  { id: 'other', label: 'Blockchain Developer' },
];

const rolesData: Record<string, { role: string; skills: string; keywords: string; budget: string }> = {
  uiux: {
    role: "Creates high-quality futuristic city environments and realistic landscapes.",
    skills: "Unreal Engine 5, Blender, Maya, Substance Painter.",
    keywords: "Unreal Engine 3D Environment Artist / Game Asset Designer",
    budget: "$500 - $2000."
  },
  web: {
    role: "Designs realistic human avatars, NPCs, and animations for immersive experiences.",
    skills: "Metahuman, Blender, Maya, Rigging, Motion Capture.",
    keywords: "Metahuman character artist / 3D animator Unreal Engine",
    budget: "$500 - $1500."
  },
  graphic: {
    role: "Designs intuitive menus, HUDs, and user experience flows for VR immersion.",
    skills: "Figma, Adobe XD, Unreal Motion Graphics (UMG).",
    keywords: "VR UI/UX designer / Unreal UI artist",
    budget: "$300 - $1000."
  },
  system: {
    role: "Develops NPC interactions, AI-driven characters, and procedural behaviors.",
    skills: "Unreal Engine Blueprints, C++, Behavior Trees.",
    keywords: "Unreal Engine AI programmer / Metaverse AI developer",
    budget: "$600 - $2500."
  },
  other: {
    role: "Sets up server infrastructure, blockchain integration (if applicable).",
    skills: "AWS, Firebase, Unreal Dedicated Servers, Smart Contracts.",
    keywords: "Unreal Engine multiplayer backend / Metaverse blockchain developer",
    budget: "$1000 - $5000."
  }
};

const contactInfo: ContactInfo[] = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1fdf093ccc4b53490f9d89a3829403aab10343181a957df0ad548014f996a7d1?placeholderIfAbsent=true&apiKey=d246cf715b99493b8c80af048d853869', text: 'techzilla.web@gmail.com' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b08c38878fd80672efb64a803f6678cc5958d0f933bef7aaa5e182d16310c669?placeholderIfAbsent=true&apiKey=d246cf715b99493b8c80af048d853869', text: '+234 70 150 38977' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75d8f9ee0fc901af0fc28abc29daca23069c7a130ebe54f0101e6d471e49bbba?placeholderIfAbsent=true&apiKey=d246cf715b99493b8c80af048d853869', text: 'Techzilla World' },
];

const ContactForm: React.FC = () => {
  const router = useRouter();
  const [selectedInterest, setSelectedInterest] = useState<string>('uiux');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [resume, setResume] = useState<File | null>(null);
  const selectedRoleData = rolesData[selectedInterest];
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // Use `setError` in `handleSubmit`

  

  const handleInterestClick = (id: string) => {
    console.log("Selected Interest: ", id);
    setSelectedInterest(id);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

   
  
    const formData = new FormData();
    formData.append("interest", selectedInterest);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    if (resume) formData.append("resume", resume);
  
    try {
      const response = await fetch("https://usebasin.com/f/76ba40891cb5", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setResume(null);
  
        // Hide success message after 3 seconds
       setTimeout(() => {
        router.push("/success");
      }, 1000);
    }  else {
      setError("Failed to send message. Please try again."); // Now `setError` is used
    }
  } catch (err) {
    console.error(err); // Logs error to the console for debugging
    setError("An error occurred. Please try again.");
  }
   finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="overflow-hidden px-16 py-14 rounded-3xl bg-gradient-to-br from-[#2d033b] to-[#7a1fa2] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold text-zinc-100 max-md:max-w-full max-md:text-4xl">
              Lets discuss <br />
              on something <span className="text-pink-700">cool </span>together
            </div>
            <div className="flex flex-col items-start mt-24 text-xl font-medium text-white max-md:mt-10 max-md:max-w-full">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex gap-4 items-center py-6 pr-32 pl-6 whitespace-nowrap rounded-2xl max-md:px-5 max-md:max-w-full ${index === 1 ? 'self-stretch mt-6 border-pink-700 border-solid bg-fuchsia-950 bg-opacity-50 border-[3px]' : index === 2 ? 'mt-6' : ''}`}>
                  <img
                    src={info.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <div className="self-stretch my-auto">{info.text}</div>
                </div>
              ))}
              <div className="flex flex-col items-center text-white text-lg font-medium text-center p-6 bg-opacity-50 bg-fuchsia-90 rounded-2xl shadow-lg mt-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-fuchsia-300">Selected Role Details</h2>
          <p className="mt-2"><strong>Role:</strong> {selectedRoleData.role}</p>
          <p className="mt-1"><strong>Skills:</strong> {selectedRoleData.skills}</p>
          
          <p className="mt-1"><strong>Budget:</strong> {selectedRoleData.budget}</p>
        </motion.div>
      </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c009d64cf763ebddc8a46ed166442a75047efa3b8fb4262f233ceb496f753b0f?placeholderIfAbsent=true&apiKey=d246cf715b99493b8c80af048d853869"
              alt=""
              width={228}
              height={64}
              className="object-contain mt-40 ml-6 max-w-full aspect-[3.56] w-[228px] max-md:mt-10 max-md:ml-2.5"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col overflow-hidden p-12 mx-auto w-full text-xl font-medium rounded-3xl backdrop-blur-lg bg-gradient-to-br from-[#2d033b] to-[#7a1fa2] shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[604px] text-white">
            <motion.div className="text-fuchsia-300 text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>I am interested in...</motion.div>
            <div className="flex flex-col mt-6 w-full text-center max-w-[604px] max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full ">
                {interestOptions.slice(0, 3).map((option) => (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => handleInterestClick(option.id)}
                    className={`flex-1 shrink gap-2.5 p-4 rounded-lg text-white font-semibold transition-all ${selectedInterest === option.id ? 'bg-fuchsia-700 shadow-lg shadow-pink-500' : 'border-2 border-fuchsia-400 bg-transparent hover:bg-fuchsia-600'}max-md:w-full`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-start self-start mt-4">
                {interestOptions.slice(3).map((option) => (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => handleInterestClick(option.id)}
                    className={`p-4 rounded-lg text-white font-semibold transition-all 
                      ${selectedInterest === option.id ? 'bg-fuchsia-700 shadow-lg shadow-pink-500' : 'border-2 border-fuchsia-400 bg-transparent hover:bg-fuchsia-600'} 
                      
                    `}
                                        
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-16 max-w-full text-white w-[600px] max-md:mt-10">
            <motion.div className="flex flex-col w-full text-fuchsia-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <label className="text-lg">Your Name</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-fuchsia-500 border-2 bg-transparent text-white p-3 rounded-lg focus:ring-2 focus:ring-pink-500"
                required
              />
            </motion.div>
            <div className="flex flex-col mt-10 w-full">
              <label className="text-lg text-fuchsia-300">Your Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border-fuchsia-500 border-2 bg-transparent text-white p-3 rounded-lg focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="flex flex-col mt-4 w-full">
              <label className="text-lg text-fuchsia-300">Upload Resume</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="mt-2 w-full border-fuchsia-500 border-2 bg-transparent text-white p-3 rounded-lg focus:ring-2 focus:ring-pink-500 cursor-pointer" />
            </div>
            <div className="flex flex-col mt-10 w-full">
              <label className="text-lg text-fuchsia-300">Your Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full border-fuchsia-500 border-2 bg-transparent text-white p-3 rounded-lg min-h-[100px] focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {/* Animated Send Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #ec4899" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="flex items-center gap-4 px-10 py-4 mt-10 text-white bg-gradient-to-br from-[#2d033b] to-[#7a1fa2] rounded-lg hover:bg-pink-700 transition-all"
        >
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cc84bf17476a46802c127a19af072234e5d834e09124e02b9c5f86faf480cf9"
            alt="Send"
            width={24}
            height={24}
            className="object-contain"
          />
          <span>Send Message</span>
        </motion.button>
      </motion.form>

      {success && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
  >
    🎉 Your message has been sent successfully!
  </motion.div>
)}
    </div>
      </div>
    </div>
  );
};

export default ContactForm;
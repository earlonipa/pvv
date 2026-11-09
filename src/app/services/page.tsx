"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  id?: string; // anchor target for deep links such as /services#pump
  title: string;
  description: string;
  images: string[];
  features: string[];
  keywords: string[];
}

interface ServiceGroup {
  id: string;
  title: string;
  services: Service[];
}

// Service photos live in /public/images/services/<folder>/<name>.webp where the
// folder is the image name without its trailing "-N" (e.g. "re-engine-2" -> "re-engine").
const serviceImage = (name: string) =>
  `/images/services/${name.replace(/-\d+$/, "")}/${name}.webp`;

const serviceGroups: ServiceGroup[] = [
  {
    id: "underwater",
    title: "UNDERWATER SERVICES",
    services: [
      {
        title: "Z-Peller / Kort Nozzle Services",
        description: "Ensure optimal maneuverability and propulsion with our expert Z-peller (azimuth thruster) services. Our skilled technicians provide comprehensive maintenance, repair, and overhaul for all Z-peller systems, ensuring efficient operation, enhanced vessel agility, and minimized downtime.",
        images: ["z-peller-1", "z-peller-2", "z-peller-3"],
        features: [
          "Routine inspections and maintenance",
          "Gearbox repair and overhaul",
          "Hydraulic system diagnostics and repair",
          "Blade and seal replacements",
          "Lubrication services",
          "Vibration analysis",
          "Performance testing",
          "Emergency repair services"
        ],
        keywords: [
          "Z-peller repair",
          "Azimuth thruster service",
          "Z-drive maintenance",
          "Marine propulsion repair",
          "Vessel maneuvering systems"
        ]
      },
      {
        title: "CPP (Controllable Pitch Propeller) Services",
        description: "Maximize your vessel's efficiency with our comprehensive CPP maintenance and repair services. Our expert team ensures optimal pitch control, smooth operation, and extended propeller life through regular maintenance and timely repairs.",
        images: ["cpp-1", "cpp-2", "cpp-3"],
        features: [
          "Pitch control system maintenance",
          "Blade angle adjustment and calibration",
          "Hydraulic system servicing",
          "Seal and bearing replacement",
          "Performance optimization",
          "Emergency repair services",
          "Preventive maintenance programs"
        ],
        keywords: [
          "CPP maintenance",
          "Controllable pitch propeller",
          "Marine propulsion",
          "Propeller repair",
          "Pitch control systems"
        ]
      },
      {
        title: "Fixed Propeller Services",
        description: "Optimize your vessel's propulsion efficiency with our expert Fixed Propeller services. Our technicians specialize in the maintenance, repair, and precise alignment of fixed-pitch propellers, crucial for reliable and consistent thrust. We provide comprehensive solutions including damage inspection, blade repair, balancing, polishing, and precise installation, ensuring your fixed propeller delivers maximum performance and fuel economy. Trust us for meticulous service that keeps your vessel moving efficiently.",
        images: ["fixed-1", "fixed-2", "fixed-3"],
        features: [
          "Visual inspection and damage assessment",
          "Blade straightening and repair",
          "Propeller balancing (static and dynamic)",
          "Surface polishing and anti-fouling preparation",
          "Shaft and coupling inspection",
          "Precise installation and alignment",
          "Performance optimization",
        ],
        keywords: [
          "Fixed propeller repair",
          "Fixed pitch propeller service",
          "Marine propeller maintenance",
          "Propeller reconditioning",
          "Ship propeller balancing",
          "Propeller polishing",
          "Fixed propeller installation",
          "Vessel propulsion repair",     
          "Propeller repair Philippines",
          "Fixed propeller service Cagayan de Oro"
        ]
      },
    ]
  },
  {
    id: "hydraulic",
    title: "HYDRAULIC AND STEERING SERVICES",
    services: [
      {
        title: "Hydraulic Services",
        description: "Expert hydraulic system maintenance and repair services for marine vessels. Our team ensures reliable operation of all hydraulic systems on board.",
        images: ["hydraulic-1", "hydraulic-2", "hydraulic-3"],
        features: [
          "Hydraulic system maintenance",
          "Pump and motor repair",
          "Valve servicing",
          "System pressure testing",
          "Leak detection and repair",
          "System upgrades",
          "Emergency repairs"
        ],
        keywords: [
          "Hydraulic repair",
          "Hydraulic maintenance",
          "Marine hydraulics",
          "Hydraulic systems",
          "Hydraulic services"
        ]
      },
      {
        title: "Steering Services",
        description: "Comprehensive steering system maintenance and repair services to ensure safe and reliable vessel operation. Our expert technicians provide solutions for all types of marine steering systems.",
        images: ["steering-1", "steering-2", "steering-3", "steering-4"],
        features: [
          "Steering system maintenance",
          "Hydraulic system repair",
          "Control system calibration",
          "Rudder maintenance",
          "Performance testing",
          "System upgrades",
          "Emergency repairs"
        ],
        keywords: [
          "Steering repair",
          "Steering maintenance",
          "Marine steering",
          "Rudder repair",
          "Steering services"
        ]
      }
    ]
  },
  {
    id: "engine",
    title: "ENGINE & MACHINERY SERVICES",
    services: [
      {
        title: "Diesel Engine Overhauling of 2-stroke and 4-stroke engine and engine alignment",
        description: "Maximize the lifespan and performance of your vessel's power plant with our specialized diesel engine overhauling services for both 2-stroke and 4-stroke engines. Our expert technicians perform thorough inspections, precise component overhauls, and meticulous engine alignment to restore optimal efficiency and reliability. We ensure your marine diesel engines deliver consistent power, reduce operational costs, and minimize unexpected downtime. Trust us for comprehensive engine care that keeps your vessel running smoothly and powerfully.",
        images: ["diesel-1", "diesel-2", "diesel-3", "diesel-4"],
        features: [
          "Complete engine disassembly and inspection",
          "Cylinder head, liner, piston, and connecting rod servicing",
          "Crankshaft and bearing inspection/replacement",
          "Fuel injection system overhaul",
          "Turbocharger service and calibration",
          "Precision engine alignment (laser or optical)",
          "Performance testing and tuning post-overhaul",
          "Vibration analysis",
          "Component cleaning and NDT (Non-Destructive Testing)"
        ],
        keywords: [
          "2-stroke diesel engine overhaul",
          "4-stroke diesel engine service",
          "Marine engine alignment",
          "Diesel engine repair vessel",
          "Ship engine overhaul",
          "Engine reconditioning marine",
          "Marine diesel service Philippines",
          "Engine alignment Cagayan de Oro",
          "Engine diagnostics marine",
          "Vessel engine maintenance"
        ]
      },
      {
        title: "Transmission and Gearbox Services",
        description: "Ensure seamless power transfer and reliable vessel performance with our expert Transmission and Gearbox services. Our skilled technicians specialize in the comprehensive maintenance, repair, and overhaul of marine transmissions and gearboxes. We diagnose issues, restore optimal functionality, and minimize downtime, ensuring efficient and dependable operation of your vessel's propulsion system. Trust us for meticulous care that keeps your vessel moving smoothly.",
        images: ["gearbox-1", "gearbox-2", "gearbox-3", "gearbox-4"],
        features: [
          "Diagnostic inspection and fault finding",
          "Gear and bearing replacement",
          "Shaft sealing and alignment",
          "Clutch assembly repair",
          "Lubrication system service",
          "Casing and housing repairs",
          "Performance testing",
          "Preventative maintenance programs",
        ],
        keywords: [
          "Marine transmission repair",
          "Ship gearbox service",
          "Vessel transmission maintenance",
          "Gearbox overhaul marine",
          "Propulsion gearbox repair",
          "Marine gear system troubleshooting",
          "Transmission repair Philippines",
          "Gearbox service Cagayan de Oro",
          "Marine clutch repair",
          "Drive system maintenance"
        ]
      },
      {
        id: "pump",
        title: "Pump and Motor Services",
        description: "Maintain the efficiency and reliability of your vessel's essential systems with our expert Pump and Motor services. Our skilled technicians provide comprehensive maintenance, repair, and overhaul for a wide range of marine pumps and motors. We ensure optimal performance, minimize downtime, and keep your operations running smoothly. Trust us for expert solutions tailored to your specific needs.",
        images: ["pump-1", "pump-2", "pump-3", "pump-4"],
        features: [
          "Disassembly and detailed inspection",
          "Impeller and casing repair/replacement",
          "Bearing and seal replacement",
          "Shaft alignment and balancing",
          "Winding inspection and repair (motors)",
          "Performance testing after overhaul",
          "Mechanical seal replacement",
          "Preventive maintenance recommendations"
        ],
        keywords: [
          "Marine pump repair",
          "Ship motor service",
          "Vessel pump maintenance",
          "Electric motor repair marine",
          "Hydraulic pump repair ship",
          "Marine pump maintenance",
          "Motor rewinding marine",
          "Pump repair Philippines",
          "Motor overhaul Cagayan de Oro"
        ]
      },
      {
        title: "Re-Engine Alignment",
        description: "Ensure the longevity and optimal performance of your newly installed or serviced marine engine with our precision Re-Engine Alignment services. Proper engine alignment is critical to prevent premature wear on bearings, couplings, and propulsion components, significantly reducing vibrations and enhancing fuel efficiency. Our expert technicians utilize advanced alignment tools and techniques to meticulously adjust your engine, guaranteeing a seamless connection to your vessel's propulsion system and maximizing its operational life. Trust us for the precise alignment that safeguards your investment.",
        images: ["re-engine-1", "re-engine-2", "re-engine-3"],
        features: [
          "Pre-alignment inspection and diagnostics",
          "Laser or optical alignment techniques",
          "Cold and hot alignment adjustments",
          "Coupling and shaft alignment verification",
          "Foundation and chock inspection",
          "Vibration analysis and reduction",
          "Documentation of alignment readings",
          "Post-installation checks and adjustments"
        ],
        keywords: [
          "Marine engine alignment",
          "Re-engine alignment service",
          "Precision engine alignment",
          "Laser engine alignment",
          "Vessel engine installation alignment",
          "Propeller shaft alignment",
          "Engine vibration reduction",
          "Marine alignment services Philippines",
          "Re-engine alignment Cagayan de Oro",
          "Engine mounting adjustment"
        ]
      },
      {
        id: "hull",
        title: "Hull and Structural Repair",
        description: "Ensure the enduring integrity and seaworthiness of your vessel with our expert Hull and Structural Repair services. Our highly skilled team specializes in comprehensive steel works, addressing everything from minor hull damage and corrosion treatment to extensive structural repairs and renewals. Utilizing advanced welding and fabrication techniques, we meticulously restore your vessel's strength, stability, and compliance with the highest maritime standards. Trust us for durable solutions that extend your vessel's operational life and maintain its vital structural health.",
        images: ["hull-1", "hull-2", "hull-3"],
        features: [
          "Damage assessment and survey",
          "Steel plate cutting, forming, and renewal",
          "Welding (FCAW, SMAW, GMAW, etc.)",
          "Frame and stiffener repair/replacement",
          "Corrosion removal and surface preparation",
          "Fairing and grit blasting",
          "Non-destructive testing (NDT)",
          "Compartment testing (e.g., watertight, oil-tight)",
          "Painting and coating application",
          "Classification society survey support"
        ],
        keywords: [
          "Ship hull repair",
          "Marine structural repair",
          "Vessel steel works",
          "Hull damage repair",
          "Corrosion treatment ship",
          "Steel plate replacement marine",
          "Ship welding services",
          "Drydock repair hull",
          "Structural renewal vessel",
          "Hull repair Philippines",
          "Marine structural repair Cagayan de Oro"
        ]
      },
      {
        title: "Auxiliary Engine Repair and Reconditioning",
        description: "Ensure a reliable power supply and smooth operations on board with our expert Auxiliary Engine Repair and Reconditioning services. We specialize in the meticulous maintenance, repair, and complete reconditioning of all types of auxiliary engines, crucial for powering generators, pumps, and other vital ship systems. Our skilled technicians diagnose issues, replace worn components, and restore these engines to optimal working condition, preventing costly breakdowns and extending their operational life. Trust us for comprehensive auxiliary engine care that keeps your vessel's essential services running efficiently.",
        images: ["auxiliary-1", "auxiliary-2", "auxiliary-3"],
        features: [
          "Diagnostic troubleshooting and fault isolation",
          "Cylinder head and valve servicing",
          "Fuel injection system repair and calibration",
          "Lubrication system maintenance",
          "Cooling system overhaul",
          "Component reconditioning and replacement",
          "Load testing and performance verification",
          "Scheduled preventive maintenance programs",
          "Emergency repair services"
        ],
        keywords: [
          "Marine auxiliary engine repair",
          "Ship generator engine service",
          "Auxiliary engine reconditioning",
          "Vessel power plant repair",
          "Marine genset maintenance",
          "Auxiliary diesel engine overhaul",
          "Ship auxiliary machinery repair",
          "Auxiliary engine repair Philippines",
          "Marine generator repair Cagayan de Oro",
          "Engine recondition marine"
        ]
      },
      {
        title: "Generator Services and Rewinding",
        description: "Ensure uninterrupted electrical power on board with our expert Generator Services and Rewinding. We provide comprehensive maintenance, precise repairs, and specialized rewinding for all types of marine generators and alternators. From routine servicing and troubleshooting to complete electrical rewinding and component replacement, our skilled technicians restore your generators to peak performance, guaranteeing a reliable power supply for your vessel's operations. Trust us for high-quality service that keeps your lights on and systems running.",
        images: ["generator-1", "generator-2", "generator-3"],
        features: [
          "Diagnostic testing and troubleshooting",
          "Bearing replacement and lubrication",
          "Voltage regulator repair/replacement",
          "Insulation resistance testing",
          "Stator and rotor rewinding",
          "Brush and commutator maintenance",
          "Load testing and performance verification",
          "Component cleaning and painting",
          "Preventative maintenance programs"
        ],
        keywords: [
          "Marine auxiliary engine repair",
          "Ship generator engine service",
          "Auxiliary engine reconditioning",
          "Vessel power plant repair",
          "Marine genset maintenance",
          "Auxiliary diesel engine overhaul",
          "Ship auxiliary machinery repair",
          "Auxiliary engine repair Philippines",
          "Marine generator repair Cagayan de Oro",
          "Engine recondition marine"
        ]
      }
    ]
  },
  {
    id: "others",
    title: "OTHERS",
    services: [
      {
        title: "Piping Repair Works",
        description: "Ensure the integrity and efficient flow of your vessel's critical systems with our expert Piping Repair Works. Our skilled technicians are proficient in diagnosing and repairing all types of marine piping, including systems for fuel, freshwater, saltwater, hydraulics, and exhaust. From precise leak detection and pipe replacement to custom fabrication and welding, we deliver durable and reliable repairs that adhere to the highest safety and industry standards, minimizing downtime and protecting your vessel's operational capabilities. Trust us for comprehensive solutions to all your piping needs.",
        images: ["piping-1", "piping-2", "piping-3", "piping-4"],
        features: [
          "Leak detection and sealing",
          "Pipe section replacement (various materials)",
          "Welding and fabrication services",
          "Valve repair and replacement",
          "Flange and gasket renewal",
          "Pressure testing of repaired systems",
          "Corrosion prevention and treatment",
          "Insulation repair",
          "System cleaning and flushing"
        ],
        keywords: [
          "Marine piping repair",
          "Ship pipe welding",
          "Vessel piping maintenance",
          "Fuel line repair marine",
          "Hydraulic pipe repair ship",
          "Exhaust pipe replacement vessel",
          "Seawater pipe repair",
          "Pipe fabrication marine",
          "Leak detection ship",
          "Piping repair Philippines",
          "Marine piping repair Cagayan de Oro"
        ]
      },
      {
        id: "tank",
        title: "Tank and Bilge Cleaning",
        description: "Maintain a clean, safe, and compliant vessel with our expert Tank and Bilge Cleaning services. We provide thorough cleaning for various types of marine tanks, including fuel, fresh water, and ballast tanks, as well as comprehensive bilge cleaning. Our skilled team efficiently removes sludge, contaminants, and debris, preventing corrosion, ensuring cargo or liquid purity, and mitigating fire and pollution risks. We adhere to strict environmental standards, leaving your tanks and bilges clean, gas-free, and ready for inspection or service. Trust us for meticulous cleaning that contributes to your vessel's operational efficiency and environmental responsibility.",
        images: ["tank-1", "tank-2", "tank-3"],
        features: [
          "Sludge, sediment, and residue removal",
          "Degreasing and washing of tank interiors",
          "Bilge pumping and cleaning",
          "Waste oil and contaminated water disposal",
          "Gas freeing and ventilation",
          "Confined space entry procedures (with certified personnel)",
          "Visual inspection post-cleaning",
          "Compliance with MARPOL and local regulations",
          "Odor control and sanitization"
        ],
        keywords: [
          "Marine tank cleaning",
          "Bilge cleaning ship",
          "Fuel tank cleaning vessel",
          "Ballast tank cleaning",
          "Ship sludge removal",
          "Tank degreasing marine",
          "Gas freeing tanks",
          "Confined space cleaning ship",
          "Environmental compliance marine",
          "Tank cleaning Philippines",
          "Bilge cleaning Cagayan de Oro"
        ]
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const AdaptiveImageCollage = ({ images }: { images: string[] }) => {
  const [showMoreImages, setShowMoreImages] = useState(false);

  const getLayoutClass = () => {
    switch(images.length) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-2 grid-rows-2";
      case 4: return "grid-cols-2 grid-rows-2";
      default: return "grid-cols-3 grid-rows-2";
    }
  };

  const getDisplayImages = () => {
    if (images.length <= 4) return images;
    return [...images.slice(0, 4), { type: "more", count: images.length - 4 }];
  };

  const handleImageClick = (img: string) => {
    window.open(serviceImage(img), '_blank');
  };

  const handleMoreClick = () => {
    setShowMoreImages(true);
  };

  const MoreImagesGrid = () => {
    const remainingImages = images.slice(4);
    
    return (
      <div className="fixed inset-0 z-50 bg-black/90 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-xl font-semibold">Additional Images</h3>
            <button
              onClick={() => setShowMoreImages(false)}
              className="text-white bg-black/50 rounded-full p-2 hover:bg-black/75"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {remainingImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative aspect-square cursor-pointer"
                onClick={() => window.open(serviceImage(img), '_blank')}
              >
                <Image
                  src={serviceImage(img)}
                  alt={`Additional image ${idx + 5}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.div 
        className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <div className={`grid ${getLayoutClass()} h-full w-full`}>
          {getDisplayImages().map((img, idx) => {
            if (typeof img === 'object' && img.type === "more") {
              return (
                <motion.div 
                  key="more" 
                  className="relative bg-gray-200 flex items-center justify-center cursor-pointer"
                  onClick={handleMoreClick}
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="text-2xl font-bold text-pvvTheme">
                    +{img.count} more
                  </span>
                </motion.div>
              );
            }
            
            const imageSrc = serviceImage(img as string);
            return (
              <motion.div
                key={idx}
                className={`relative ${idx === 0 && images.length > 1 ? 'row-span-2' : ''} cursor-pointer`}
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleImageClick(img as string)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={imageSrc}
                    alt={`Service image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{ objectPosition: 'center' }}
                    loading={idx === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {showMoreImages && <MoreImagesGrid />}
    </>
  );
};

const ServiceCard = ({ service, index, isExpanded, onToggle }: {
  service: Service;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div 
      id={service.id}
      className="mb-16 last:mb-0 scroll-mt-24"
      variants={itemVariants}
    >
      <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <motion.div 
          className="w-full md:w-1/2"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AdaptiveImageCollage images={service.images} />
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className={`p-6 md:p-8 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
            <motion.h2 
              className="text-2xl font-bold text-pvvTheme mb-4"
              whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
            >
              {service.title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {service.description}
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#d12e2e" }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggle}
              className="bg-pvvTheme text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </motion.button>
            
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <ul className="list-disc list-inside text-gray-700">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="mb-2"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      {index < service.features.length - 1 && (
        <motion.div 
          className="mt-16 border-t border-gray-200"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      )}
    </motion.div>
  );
};

const ServiceGroupSection = ({ group, expandedServices, toggleService }: {
  group: ServiceGroup;
  expandedServices: Record<string, boolean>;
  toggleService: (groupTitle: string, serviceIndex: number) => void;
}) => {
  return (
    <section id={group.id} className="py-8 scroll-mt-24">
      <motion.h2 
        className="text-3xl font-bold text-pvvTheme mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {group.title}
      </motion.h2>
      
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {group.services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isExpanded={expandedServices[`${group.title}-${index}`] || false}
            onToggle={() => toggleService(group.title, index)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default function Services() {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleService = (groupTitle: string, serviceIndex: number) => {
    const key = `${groupTitle}-${serviceIndex}`;
    setExpandedServices(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredGroups = serviceGroups.map(group => ({
    ...group,
    services: group.services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.keywords.some(keyword =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  })).filter(group => group.services.length > 0);

  return (
    <main className="min-h-screen">
      <motion.div 
        className="bg-pvvTheme py-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.02 }}
          >
            OUR SERVICES
          </motion.h1>
          <motion.p
            className="mt-4 text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive marine services tailored to your vessel&apos;s needs
          </motion.p>
        </div>
      </motion.div>
      
      <div className="py-10">
        <motion.div
          className="mb-10 px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="container mx-auto">
            <div className="relative max-w-md mx-auto">
              <motion.input
                type="text"
                placeholder="Search services..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pvvTheme"
                whileFocus={{ scale: 1.02 }}
              />
            </div>
          </div>
        </motion.div>
        
        {filteredGroups.map((group, index) => (
          <ServiceGroupSection
            key={index}
            group={group}
            expandedServices={expandedServices}
            toggleService={toggleService}
          />
        ))}
      </div>
    </main>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";
import { FaServer, FaLaptopCode, FaShieldAlt, FaDatabase, FaNetworkWired, FaCloud, FaEnvelope, FaUserShield, FaProjectDiagram } from "react-icons/fa";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Socials from "../../components/Socials"; // Assurer l'importation du composant Socials
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "Systems Administration",
    info: [
      {
        title: "Windows Server & GNU/Linux",
        icons: [FaServer],
      },
      {
        title: "Virtualization",
        icons: [FaCloud],
      },
    ],
  },
  {
    title: "Web Development",
    info: [
      {
        title: "HTML, CSS, JavaScript, PHP",
        icons: [FaLaptopCode],
      },
      {
        title: "CMS: WordPress, Odoo",
        icons: [FaWordpress],
      },
    ],
  },
  {
    title: "Security",
    info: [
      {
        title: "SSL, IPSec, SSH, Firewalls",
        icons: [FaShieldAlt],
      },
      {
        title: "SIEM, IDS/IPS",
        icons: [FaUserShield],
      },
    ],
  },
  {
    title: "Backup and Restoration",
    info: [
      {
        title: "Veeam, Backup Exec, Acronis",
        icons: [FaDatabase],
      },
    ],
  },
  {
    title: "Network Management",
    info: [
      {
        title: "Routing, VLAN, ACL, DNS, DHCP",
        icons: [FaNetworkWired],
      },
      {
        title: "Active Directory",
        icons: [FaProjectDiagram],
      },
    ],
  },
  {
    title: "Email Deployment",
    info: [
      {
        title: "Zimbra",
        icons: [FaEnvelope],
      },
    ],
  },
  {
    title: "Learning Platforms",
    info: [
      {
        title: "Moodle",
        icons: [FaProjectDiagram],
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12"
          >
            Passionné par la technologie et spécialisé dans les systèmes et réseaux, j'ai une expérience diversifiée en administration de systèmes, virtualisation, sécurité informatique, et développement web.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemI) => (
                <div
                  key={itemI}
                  className={`${
                    index === itemI &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemI)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

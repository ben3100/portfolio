import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaWindows,
  FaLinux,
  FaUbuntu,
  FaDocker,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiVirtualbox,
  SiVmware,
  SiKubernetes,
  SiNginx,
  SiApache,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiAnsible,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiGitlab,
  SiGithub,
  SiGit,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import Socials from "../../components/Socials";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Systems",
        icons: [FaWindows, FaLinux, FaUbuntu, SiNginx, SiApache, SiMysql, SiPostgresql, SiRedis, SiMongodb],
      },
      {
        title: "Virtualization",
        icons: [SiVirtualbox, SiVmware, FaDocker, SiKubernetes],
      },
      {
        title: "Linux Services",
        icons: [SiNginx, SiApache, SiMysql, SiPostgresql, SiRedis, SiMongodb],
      },
      {
        title: "Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, FaWordpress],
      },
      {
        title: "Security",
        icons: [SiAnsible, SiTerraform, SiJenkins, SiPrometheus, SiGrafana],
      },
      {
        title: "Backup and Restoration",
        icons: [SiGitlab, SiGithub, SiGit],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Auto-entrepreneur, E-commerce",
        stage: "2021",
      },
      {
        title: "Freelance Développeur Web",
        stage: "2018 – 2020",
      },
      {
        title: "Développeur Web & Multimédia, 111 RENT CAR",
        stage: "2017",
      },
      {
        title: "Développeur Web & Webmaster, CSRICTED UMAB",
        stage: "2016",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Technicien Supérieur Systèmes et Réseaux (LDNR FORMATION)",
        stage: "2022 – 2023",
      },
      {
        title: "Développeur web et multimédia (Institut Supérieur Khalil Zyat)",
        stage: "2014 – 2016",
      },
      {
        title: "IBM Cybersecurity Analyst",
        stage: "",
      },
      {
        title: "Architecting Solutions on AWS",
        stage: "",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
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
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Création de <span className="text-accent">solutions innovantes</span> grâce à mon expertise.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Avec plus de dix ans d'expérience, j'ai transformé des idées en réalité, en fournissant des solutions innovantes pour des agences, des startups et des entreprises. Mon parcours en tant que développeur comprend le travail à distance, le conseil et la collaboration sur divers produits numériques pour les marchés professionnels et grand public.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Années d'expérience.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Clients satisfaits.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projets réalisés.
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Récompenses obtenues.
                </div>
              </div>
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
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
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

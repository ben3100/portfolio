import { motion } from "framer-motion";
import { FaCode, FaWordpress, FaDatabase, FaEnvelope, FaNetworkWired, FaGraduationCap } from "react-icons/fa";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "Développement Web",
    description: "Création de sites web sur mesure avec les dernières technologies.",
    icon: <FaCode />,
  },
  {
    title: "CMS & WordPress",
    description: "Développement de sites web utilisant des CMS comme WordPress.",
    icon: <FaWordpress />,
  },
  {
    title: "Odoo",
    description: "Implémentation et personnalisation d'Odoo pour la gestion d'entreprise.",
    icon: <FaDatabase />,
  },
  {
    title: "Messagerie & Zimbra",
    description: "Déploiement et gestion de serveurs de messagerie avec Zimbra.",
    icon: <FaEnvelope />,
  },
  {
    title: "Active Directory",
    description: "Gestion des utilisateurs et des ressources avec Active Directory.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Moodle",
    description: "Développement et administration de plateformes d'apprentissage Moodle.",
    icon: <FaGraduationCap />,
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Mes services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Voici les services que je propose pour répondre à vos besoins technologiques et professionnels.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider services={serviceData} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

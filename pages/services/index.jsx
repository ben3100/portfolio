import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const servicesData = [
  {
    title: "Administration Systèmes et Réseaux",
    description: "Gestion des systèmes Windows Server et GNU/Linux, virtualisation avec Proxmox, Docker, Hyper-V.",
  },
  {
    title: "Développement Web CMS",
    description: "Conception et développement de sites web avec des CMS comme WordPress et Odoo.",
  },
  {
    title: "Déploiement de Messagerie",
    description: "Déploiement et gestion de systèmes de messagerie tels que Zimbra.",
  },
  {
    title: "Active Directory",
    description: "Gestion et administration d'Active Directory pour une gestion centralisée des utilisateurs et des ressources.",
  },
  {
    title: "Développement Moodle",
    description: "Installation et personnalisation de plateformes d'apprentissage en ligne Moodle.",
  },
  {
    title: "Sécurité Informatique",
    description: "Mise en place de pare-feu, SSL, IPSec, SSH, et systèmes de détection d'intrusion.",
  },
  {
    title: "Sauvegarde et Restauration",
    description: "Solutions de sauvegarde avec Veeam Backup, Backup Exec, Acronis Backup.",
  },
  {
    title: "Support Technique",
    description: "Assistance technique et maintenance des systèmes.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Services
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-6 xl:mb-12"
          >
            Voici les services que je propose pour vous aider à atteindre vos objectifs technologiques.
          </motion.p>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-8"
            >
              <h3 className="text-xl text-accent mb-2">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

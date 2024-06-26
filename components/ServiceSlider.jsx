const ServiceSlider = ({ services }) => {
  return (
    <div className="service-slider">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <div className="service-icon">{service.icon}</div>
          <div className="service-content">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;

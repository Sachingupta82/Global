import React, { useState } from "react";
import "./Header.component.css";
import Form from "./Form";

const dropdownData = [
  {
    title: "Explore Services",
    items: [
      { icon: "/emerging.png", label: "Emerging Technology", link: "#emerging-tech", subItems: [
        { label: "Internet of Things", link: "#iot" },
        { label: "Artificial Intelligence", link: "#ai" },
        { label: "Blockchain", link: "#blockchain" },
        { label: "Robotic Automation", link: "#blockchain" },
        { label: "Digital Kiosk", link: "#blockchain" },
        { label: "Metaverse", link: "#blockchain" },
        { label: "Metaverse", link: "#blockchain" },
        
      ] },
      { icon: "/cloud.png", label: "Data and Cloud", link: "#data-cloud", subItems: [
        { label: "Cost Optimiation", link: "#iot" },
        { label: "Cybersecurity", link: "#ai" },
        { label: "Big Data Analytics", link: "#blockchain" },   
        
      ] },
      { icon: "/software.png", label: "Software Development", link: "#software-dev", subItems: [
        { label: "Apps & Websites", link: "#iot" },
        { label: "E-Commerce", link: "#ai" },
        { label: "ERP", link: "#blockchain" },    
        { label: "Game Development", link: "#blockchain" },  
      ] },
      { icon: "/marketing.png", label: "Marketing", link: "#marketing" },
      { icon: "/staff.png", label: "Staff Augmentation", link: "#staff-aug" },
    ],
  },
  {
    title: "Resources",
    items: [
      { icon: "/blog.png", label: "Blog", link: "#blog" },
      { icon: "/case.png", label: "Case Studies", link: "#case-studies" },
    ],
  },
  {
    title: "Community",
    items: [
      { icon: "/blog.png", label: "Work with us", link: "/work-with-us" },
      { icon: "/partner.png", label: "Apply as a Partner Agency", link: "/partner" },
    ],
  },
];

const Header = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };
  const toggleFormVisibility = () => {
    console.log("Toggling Form:", !isFormVisible); // Debugging
    setIsFormVisible(!isFormVisible);
  };
  return (
    <header className="header">
      <a href="/">  
        <div className="log">
          <img src="/emb.png" alt="EMB Global" />
        </div>
      </a>

      <nav className="nav">
        {dropdownData.map((dropdown, index) => (
          <div className="nav-item dropdown" key={index}>
            <div
              className="content"
              onMouseEnter={() => handleMouseEnter(index)}
              aria-haspopup="true"
              aria-expanded={openDropdown === index}
            >
              <span className="Items">{dropdown.title}</span>
              <div className={`icon w-icon-dropdown-toggle drop ${openDropdown === index ? "open" : ""}`} aria-hidden="true"></div>
            </div>
            {openDropdown === index && (
              <div className="dropdown-menu">
                {dropdown.items.map((item, idx) => (
                  <div key={idx} className="dropdown-item">
                    <a href={item.link}>
                      <img src={item.icon} alt={item.label} />
                      <span>{item.label}</span>
                    </a>
                    {item.subItems && (
                      <div className="dropdown-item-subitem">
                        {item.subItems.map((subItem, subIdx) => (
                          <a href={subItem.link} key={subIdx}>
                            <span>{subItem.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <button className="contact-sales" onClick={toggleFormVisibility}>
        Contact Sales →
      </button>
      {<Form isFormVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}/>}
    </header>
  );
};

export default Header;
import React from "react";

const LocationMap = () => {
  return (
    <>
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d252753.81303790063!2d77.26537840214188!3d23.253970191590614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAshirwad%20Hospital!5e0!3m2!1sen!2sin!4v1764335646909!5m2!1sen!2sin"
          width={"100%"}
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default LocationMap;

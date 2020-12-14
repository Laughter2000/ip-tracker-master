import React, { useState, useEffect } from "react";

import Maps from "./Map";

const Home = () => {
  // eslint-disable-next-line
  const [ip, setIp] = useState(null);
  const [input, setInput] = useState("");
  // eslint-disable-next-line
  const [finalInput, setFinalInput] = useState("");

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_YlbMeY0L7K96EKAZtogFsQGIEKLmg&ipAddress=${finalInput}`
    )
      .then((response) => response.json())
      .then((response) => setIp(response))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [finalInput]);

  const finalfunc = () => {
    setFinalInput(input);
  };
  return (
    <div>
      <div className="ip-form">
        <input
          type="text"
          name="ipaddress"
          id="ipaddress"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setInput(e.target.value)}
          onBlur={(e) => setInput(e.target.value)}
        />
        <div className="submit-button" onClick={finalfunc}></div>
      </div>

      {ip ? (
        <div>
          <div className="ip-details">
            <div className="detail">
              <p>IP ADDRESS</p>
              <h2>{ip.ip}</h2>
            </div>
            <div className="detail">
              <p>LOCATION</p>
              <h2>
                {`${ip.location.city}, ${ip.location.country} ${ip.location.postalCode}`}
              </h2>
            </div>
            <div className="detail">
              <p>TIMEZONE</p>
              <h2>{`UTC ${ip.location.timezone}`}</h2>
            </div>
            <div className="detail">
              <p>ISP</p>
              <h2>{ip.isp}</h2>
            </div>
          </div>
          <Maps lat={ip.location.lat} lng={ip.location.lng} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Home;

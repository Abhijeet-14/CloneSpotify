import React from "react";
import { useDataLayerValue } from "../../Reducer/DataLayer";

function ReGenerate() {
  const [{newVal, token}, dispatch] = useDataLayerValue();

  const regen = async () => {
    console.log("Updated token: ", token );

    const clientId = "faf03f07c25447eaa635bb167bf7764e";
    
    await fetch(
      `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${newVal?.refresh_token}&client_id=${clientId}`,
      {
        headers: {
          Authorization:
          // Basic Base64<clinet_Id:client_secret>
            "Basic ZmFmMDNmMDdjMjU0NDdlYWE2MzViYjE2N2JmNzc2NGU6MDgyMTA3OWMyYzBjNGNiZmE3NWFiZDFiY2EwNTFmN2U=",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("New Token Value: ", data);
        // Set New Token
        dispatch({
          type: "SET_TOKEN",
          payload: {
            token: data.access_token,
            expires: data.expires_in,
          },
        });
      })
      .catch((err) => console.log("Err-refresh: ", err));
  };

  

  return (
    <div className="container-fluid m-0 p-1 bg-danger text-right">
      <button onClick={regen} id="reg">
        Re-Generate
      </button>
    </div>
  );
}

export default ReGenerate;

import React, { useState, useEffect} from "react";

import Datatable from "./datatable";



export default function App()
{
 const [data, setData] = useState([]);
 const [q, setQ] = useState("");

 useEffect(() =>  {
   fetch("https://zadaniepraktyki.azurewebsites.net/api/Users?code=2mmsazOBIbXQXSTHOiiEt3pzCMpAEK2/o/m/AmYxJptBgN2aLGpo4Q==")
   .then(response => response.json())
   .then(json => setData(json));
 }, []);

function search(rows) {

  return rows.filter(
  (row) =>
      row.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
      row.lastName.toLowerCase().indexOf(q.toLowerCase()) > -1
  );
}

 return(
  <div>
    <div>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
    </div>
    <div>
      <Datatable data={search(data)} />
    </div>
  </div>

 );

}

import React, { useState } from 'react'
import Child from './Child'
import './Parent.css'


const Parent = () => {
  const [mobile, setMobiles] = useState(
    [
      {
        name: "Samsung Galaxy ",
        ram: "8GB",
        price: 30999
      }, {
        name: "Apple iP 14 Pro max",
        ram: "128GB",
        price: 127999
      }, {
        name: "Redmi Note 12",
        ram: "6GB",
        price: 18999
      }, {
        name: "Vivo Y35",
        ram: "8GB",
        price: 16999
      },
      {
        name: "Vivo U20",
        ram: "4GB",
        price: 15000
      }
    ]
  );


  let passvalue = (index) => {
    let datas = mobile.filter((n, i) => i !== index);
    setMobiles(datas);
    console.log(datas)
  };

  const sortMobilesLTH = () => {
    const sortedMobilesLTH = [...mobile].sort((a, b) => a.price - b.price);
    setMobiles(sortedMobilesLTH);
    console.log(sortedMobilesLTH);
  };


  const sortMobilesHTL = () => {
    const sortedMobilesHTL = [...mobile].sort((a, b) => a.price - b.price);
    setMobiles(sortedMobilesHTL.reverse());
    console.log(sortedMobilesHTL);
  };


  const filtermobiles = () => {
    const filteredmobiles = mobile.filter((elm) => elm.ram > "4GB")
    setMobiles(filteredmobiles);
    console.log(filteredmobiles);
  }


  const sortMobilesAsc = () => {
    const sortedAsc = [...mobile].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setMobiles(sortedAsc);
    console.log(sortedAsc)
  }

  const sortMobilesDes = () => {
    const sortedDes = [...mobile].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });

    setMobiles(sortedDes.reverse())
    console.log(sortedDes);
  }
  return (
    <div>
      <Child message={mobile} func={passvalue}
        asc={sortMobilesAsc}
        des={sortMobilesDes}
        sortH={sortMobilesHTL}
        sortL={sortMobilesLTH}
        filt={filtermobiles}
      />
    </div>

  )
}

export default Parent
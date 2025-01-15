import { Form } from "react-router-dom";

export async function loginUser(creds) {
  const res = await fetch("http://localhost:4040/api/v1/ba/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}



// retail api


export async function fleetForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  const formData = new FormData();

  for (const key in data_one) {
    if (data_one.hasOwnProperty(key)) {
      formData.append(key, data_one[key]);
    }
  }

      formData.append("place", "HD_ON_GO");
      formData.append("ba_name", nameEl);
      formData.append("ba_phone", PhoneEl);
      formData.append("ba_region", locationsEl);



  const res = await fetch("https://iguru.co.ke/skope_api/BM.php", {

    method: "POST",
    body: formData,
  });

  // const data = await res.json();
  if (res.ok) {
    const data = await res.text();

    return data

  }else{
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }

}


export async function ongoSummaryForm(test) {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);

  const nameEl = storeTwo.ba_name;
  const PhoneEl = storeTwo.ba_phone;
  const locationsEl = storeTwo.ba_region;

  const data_one = { ...test };

  const formData = new FormData();

  for (const key in data_one) {
    if (data_one.hasOwnProperty(key)) {
      formData.append(key, data_one[key]);
    }
  }

      formData.append("place", "ON_GO_SUMMARY");
      formData.append("ba_name", nameEl);
      formData.append("ba_phone", PhoneEl);
      formData.append("ba_region", locationsEl);



  const res = await fetch("https://iguru.co.ke/skope_api/BM.php", {

    method: "POST",
    body: formData,
  });

  // const data = await res.json();
  if (res.ok) {
    const data = await res.text(); // Read the response as plain text
    return data

  }else{
    throw {
      message: data.msg,
      statusText: res.statusText,
      status: res.status,
    };
  }

}

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function getUserData() {
  const storeOne = localStorage.getItem("Auth");
  const storeTwo = JSON.parse(storeOne);
  console.log(storeTwo);
  const userResult = storeTwo;
  return userResult;
}

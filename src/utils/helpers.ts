import toast from "react-hot-toast";

export const toastMessage = (type: string, message: string, options = {}) => {
  switch (type) {
    case "success":
      toast.success(message, {
        duration: 4000,
        style: {
          border: "1px solid #4caf50",
        },
        icon: "✅",
        iconTheme: {
          primary: "#4caf50",
          secondary: "#FFF",
        },
        ...options,
      });
      break;

    case "error":
      toast.error(message, {
        duration: 4000,
        style: {
          border: "1px solid #f44336",
        },
        icon: "❌",
        iconTheme: {
          primary: "#f44336",
          secondary: "#FFF",
        },
        ...options,
      });
      break;

    case "info":
      toast(message, {
        duration: 4000,
        style: {
          border: "1px solid #2196f3",
        },
        iconTheme: {
          primary: "#2196f3",
          secondary: "#FFF",
        },
        ...options,
      });
      break;

    default:
      toast(message, { ...options });
      break;
  }
};

export const setCookie = (
  cookieName: string,
  cookievalue: string,
  expiryDays: number = 2
) => {
  const storedValue =
    typeof cookievalue === "string" ? cookievalue : JSON.stringify(cookievalue);
  const encodedValue = btoa(storedValue);
  const currentDate: Date = new Date();
  currentDate.setTime(currentDate.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires: string = "expires=" + currentDate.toUTCString();
  document.cookie = `${cookieName}=${encodedValue};${expires};path=/`;
};

const getStoredData = (data: string) => {
  try {
    return JSON.parse(atob(data));
  } catch {
    return data;
  }
};

export const getCookie = (cname: string) => {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${cname}=`));
  return match ? getStoredData(match.split("=")[1]) : null;
};

export const deleteCookie = (name: string) => {
  setCookie(name, "", -1);
};

export const getErrorMessage = (err: any) => {
  let toastText = "";
  if (err?.response?.data?.message) {
    toastText = err?.response?.data?.message;
  } else if (err?.response?.statusText) {
    toastText = `${err?.response?.statusText}.Try again later.`;
  } else {
    toastText = "Something went wrong!";
  }
  toastMessage("error", toastText);
};

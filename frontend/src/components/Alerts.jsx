import React from "react";
import PropTypes from "prop-types";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoAlertCircleOutline, IoClose } from "react-icons/io5";
import { PiInfoLight } from "react-icons/pi";
import { VscError } from "react-icons/vsc";

const Alerts = ({ msgHeading, text, type, onClose }) => {
  const getClassByType = (type) => {
    switch (type) {
      case "success":
        return "bg-green-100  border border-green-500";
      case "info":
        return "bg-blue bg-opacity-30  border border-blue";
      case "error":
        return "bg-red-100  border border-red-500";
    }
  };

  const getIconByType = (type) => {
    switch (type) {
      case "success":
        return <FaRegCircleCheck className="h-5 w-5 text-green-500" />;
      case "info":
        return <PiInfoLight className="h-5 w-5 text-blue  " />;
      case "error":
        return <VscError className="h-5 w-5 text-red-500" />;
    }
  };
  return (
    <>
      <div
        className={`p-4 rounded mb-4 max-w-xs flex items-center ${getClassByType(
          type
        )}`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="mr-2">{getIconByType(type)}</div>
            {msgHeading && <h2 className="font-medium mb-1">{msgHeading}</h2>}
          </div>
          <p className="pl-9">{text}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="ml-2 mb-10">
            <IoClose className="h-5 w-5 text-gray-700" />
          </button>
        )}
      </div>
    </>
  );
};

Alerts.propTypes = {
  msgHeading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success", "info", "default"]),
  onClose: PropTypes.func,
};

export default Alerts;

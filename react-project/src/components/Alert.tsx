import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    // <div className="alert alert-primary">
    //   {children}
    // </div>

    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button> {children}
    </div>
  );
}

export default Alert;

import classNames from "classnames";
import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "text",
  };

  public render() {
    let newType = this.props.type;
    const {
      error,
      errorMessage,
      fluid,
      subtext,
      type,
      label,
      disabled,
      className,
      ...props
    } = this.props;
    if (type === "checkbox" || type === "radio") {
      newType = "text";
    }
    const inputClasses = classNames(
      "q-input-wrapper",
      classNamesDefault({ error, disabled, fluid }),
      className);
    return (
      <div className={inputClasses}>
        {label && (
          <label className={"q-label"}>{label}</label>
        )}
        {subtext && <span className="q-span q-input-subtext">{subtext}</span>}
        <input
          className={"q-input"}
          disabled={disabled}
          type={newType}
          {...props}
        />
        {error && errorMessage && (
          <span className="q-span q-input-error">{errorMessage}</span>
        )}
      </div>
    );
  }
}

interface IProps extends IInput {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  subtext?: string;
  fluid?: boolean;
  className?: string;
}

export default Input;

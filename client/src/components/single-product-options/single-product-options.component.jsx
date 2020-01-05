import React, { useState, useEffect, useCallback } from "react";
import "./single-product-options.styles.scss";
import CustomButton from "../custom-button/custom-component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const SingleProductOptions = ({ options, product, addItem }) => {
  const [selectedOption, updateSelectedOption] = useState();
  const productToBuy = selectedOption
    ? { ...product, option: selectedOption }
    : product;

    const initialOptionSelect = useCallback(() => {
      if(options) {
        updateSelectedOption(Object.keys(options)[0]);
        const optionButtons = document.querySelectorAll(".options-container button");
        optionButtons[0].classList.add("option-selected");
      }
    }, [options, updateSelectedOption])
    
    useEffect(() => {
      initialOptionSelect();
    }, [options, initialOptionSelect])

  const updateOption = e => {
    const option = e.target.getAttribute("data-option");

    if (option) {
      e.target.classList.add('option-selected');
      const otherOptions = document.querySelectorAll('.options-container button');

      otherOptions.forEach((button) => {
        const dataAttr = button.getAttribute("data-option");
        
        if(dataAttr !== option) {
          button.classList.remove('option-selected');
        }
      })
      updateSelectedOption(option);
    }
  };

  return (
    <div className="product-options-container">
      {options ? (
        <div className="optionsContainer">
          <h2>Options</h2>
          <div className="product-options">
            {Object.keys(options).map(key => (
              <div className="options-container" key={key}>
                <p>
                  <CustomButton
                    onClick={updateOption}
                    data-option={key}
                    inverted
                  >
                    {options[key]}
                  </CustomButton>
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <CustomButton onClick={() => addItem(productToBuy)}>
        Add item
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(SingleProductOptions);

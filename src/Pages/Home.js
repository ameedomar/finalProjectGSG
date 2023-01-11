import React, { useState } from "react";
import app from "../Authentication/base";
import {
  FcPhone,
  FcReadingEbook,
  FcPlus,
  FcPuzzle,
  FcPicture,
  FcPieChart,
  FcPlanner,
  FcPhotoReel,
} from "react-icons/fc";
import "../Styles/categories.scss";
import Calculator from "../Components/Calculator";

const Home = () => {
  const [balance, setBalance] = useState(parseFloat(0));
  const [incomeAdded, seIncomeAdded] = useState(parseFloat(200));
  const [outcomeAdded, setOutcomeAdded] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [addIncomePanel, setAddIncomePanel] = useState(false);
  const [categoriesPanel, setCategoriesPanel] = useState(true);
  const [categoryType, setCategoryType] = useState("");

  const [gamingTotalOutcome, setGamingTotalOutcome] = useState(0);
  const [shoopingTotalOutcome, setShoopingTotalOutcome] = useState(0);
  const [taxiTotalOutcome, setTaxiTotalOutcome] = useState(0);
  const [privateCatTotalOutcome, setPrivateCarTotalOutcome] = useState(0);
  const [houseTotalOutcome, setHouseTotalOutcome] = useState(0);
  const [travelTotalOutcome, setTravelTotalOutcome] = useState(0);
  const [cutHairTotalOutcome, setCutHairTotalOutcome] = useState(0);
  const [marketShoopingTotalOutcome, setMarketShoopingTotalOutcome] =
    useState(0);
  const [clothesTotalOutcome, setClothesTotalOutcome] = useState(0);
  const [foodTotalOutcome, setFoodTotalOutcome] = useState(0);
  const [catsTotalOutcome, setCatsTotalOutcome] = useState(0);
  const [learnTotalOutcome, setLearnTotalOutcome] = useState(0);
  const [electrycityTotalOutcome, setElectrycityTotalOutcome] = useState(0);
  const [medicalTotalOutcome, setMedicalTotalOutcome] = useState(0);

  function addIncome() {
    setAddIncomePanel(true);
    setCategoriesPanel(false);
    setBalance(totalIncome - totalOutcome);
    // setBalance(balance + incomeAdded - outcomeAdded);
  }
  function onValueChangeToAddIncome(e) {
    if (e.target.value != "") {
      seIncomeAdded(e.target.value);
      console.log(categoryType);
    } else seIncomeAdded(0);
  }
  function addIncomeAmount(e) {
    e.preventDefault();
    seIncomeAdded(parseFloat(incomeAdded));
    // console.log("addAmountFromCalc" + "Calculator");
    setTotalIncome(parseFloat(totalIncome) + parseFloat(incomeAdded));
  }
  function onValueChangeToAddOutcome(e) {
    if (e.target.value != "") setOutcomeAdded(e.target.value);
    else setOutcomeAdded(0);
  }
  function addOutcomeAmount() {
    if (categoryType == "Gaming") {
      setGamingTotalOutcome(gamingTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Shooping") {
      setShoopingTotalOutcome(shoopingTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Taxi") {
      setTaxiTotalOutcome(taxiTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Private Car") {
      setPrivateCarTotalOutcome(
        privateCatTotalOutcome + parseFloat(outcomeAdded)
      );
    } else if (categoryType == "House") {
      setHouseTotalOutcome(houseTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Travel") {
      setTravelTotalOutcome(travelTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Cut Hair") {
      setCutHairTotalOutcome(cutHairTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Market Shoping") {
      setMarketShoopingTotalOutcome(
        marketShoopingTotalOutcome + parseFloat(outcomeAdded)
      );
    } else if (categoryType == "Clothes") {
      setClothesTotalOutcome(clothesTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Food") {
      setFoodTotalOutcome(foodTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Cats") {
      setCatsTotalOutcome(catsTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Learning") {
      setLearnTotalOutcome(learnTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "Electrycity") {
      setElectrycityTotalOutcome(
        electrycityTotalOutcome + parseFloat(outcomeAdded)
      );
    } else if (categoryType == "Medical") {
      setMedicalTotalOutcome(medicalTotalOutcome + parseFloat(outcomeAdded));
    } else if (categoryType == "") console.log("categoryType is nothing ");

    setOutcomeAdded(parseFloat(outcomeAdded));
    setTotalOutcome(parseFloat(totalOutcome) + parseFloat(outcomeAdded));
  }
  const handleWhichCatTypeChoose = (event) => {
    setCategoryType(event.target.value);
  };
  return (
    <>
      {/* <div>
        <h6> Hello</h6>
        <h2>{totalIncome}</h2>
        <h2>{totalOutcome}</h2>
        <h3> {gamingTotalOutcome}</h3>
      </div> */}
      <div className="main-content-area">
        <div className="add-income-area">
          {" "}
          <form>
            Please Choose category :
            <select value={categoryType} onChange={handleWhichCatTypeChoose}>
              <option value=""></option>
              <option value="Gaming">Gaming</option>
              <option value="Shooping">Shooping</option>
              <option value="Taxi">Taxi</option>
              <option value="Private Car">Private Car</option>
              <option value="Cats">Cats</option>
              <option value="House">House</option>
              <option value="Food">Food</option>
              <option value="Medical">Medical</option>
              <option value="Clothes">Clothes</option>
              <option value="Electrycity">Electrycity</option>
              <option value="Learning">Learning</option>
              <option value="Market Shoping">Market Shoping</option>
              <option value="Cut Hair">Cut Hair</option>
              <option value="Travel">Travel</option>
            </select>
            <td>
              <label> Floating Number: </label>
              <input
                id="IncomeAmount"
                type="number"
                step="0.1"
                min="0"
                max="10000"
                onChange={(event) => onValueChangeToAddIncome(event)}
              />
              <button onClick={addIncomeAmount}> Let's add income</button>
            </td>
          </form>
          <h5> cstegories is : {categoryType}</h5>
        </div>
        <div className="add-outcome-area">
          {" "}
          <td>
            <label> Floating Number: </label>
            <input
              id="IncomeAmount"
              type="number"
              step="0.1"
              min="0"
              max="50"
              onChange={(event) => onValueChangeToAddOutcome(event)}
            />
            <button onClick={addOutcomeAmount}> Let's add Outcome</button>
          </td>
        </div>
        <div className="knowOutcome">
          {/* <h6>
            Clothes : {clothesTotalOutcome} Percantage is :{" "}
            {totalOutcome == 0
              ? clothesTotalOutcome
              : (clothesTotalOutcome / totalOutcome) * 100 + "%"}
          </h6> */}
        </div>
        <div className="categories-area">
          <div className="categories">
            <div className="cat1">
              <div>
                <img
                  className="img1"
                  src="https://img.icons8.com/color/48/null/controller.png"
                />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (gamingTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/shopping-mall.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (shoopingTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/taxi.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (taxiTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/boot-open.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (privateCatTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
            </div>
            <div className="cat2a">
              <div>
                <img src="https://img.icons8.com/color/48/null/cat--v1.png" />

                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (catsTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/garage-closed.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (houseTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
            </div>
            <div className="cat2b">
              <div>
                <img src="https://img.icons8.com/color/48/null/pizza.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (foodTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/hospital.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (medicalTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
            </div>
            <div className="cat2c">
              <div>
                <img src="https://img.icons8.com/color/48/null/jumper.png" />

                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (clothesTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/electrical.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (electrycityTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
            </div>

            <div className="cat3">
              <div>
                <img src="https://img.icons8.com/color/48/null/school.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (learnTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/shopping-cart--v1.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (marketShoopingTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/man-combing-hair.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (cutHairTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/null/airplane-mode-on--v1.png" />
                <h6>
                  {totalOutcome == 0
                    ? ""
                    : (travelTotalOutcome / totalOutcome) * 100 + "%"}
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Calculator-area">
          <Calculator />
          {}
        </div> */}
        <div className="second-area">
          <div className="balance">
            <h6></h6>
            <button className="balance-btn">
              Balance {totalIncome - totalOutcome} $
            </button>
            {console.log(balance)}
          </div>
          <div className="buttons-parent">
            <div className="buttons">
              <button className="outcome-btn"> Outcome </button>
              <button className="income-btn" onClick={addIncome}>
                {" "}
                Income{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

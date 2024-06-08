require("./vendor.js");
import _ from "lodash";
import css from "./style.css";
import { run } from "./app/app.js";
import { AlertService } from "./app/alert.service.js";
import { CalculatorService } from "./app/calculator.service.js";
import { JokesService } from "./app/jokes.service.js";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log(_.toUpper("csxxxx"));

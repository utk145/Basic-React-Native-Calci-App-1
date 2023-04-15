import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import Button from './Button';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';


const MyKeyboard = () => {

    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState<Number | null>(null);
    /* <Number | null> is a type annotation indicating that the state variable result will either be of type Number or null. This means that the initial value of result will be null. */

    const NumberPressHandler = (buttonVal: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonVal);
        }

    };

    const OperationPressHandler = (buttonVal: string) => {
        // setOperation(buttonVal);
        // setSecondNumber(firstNumber);
        // setFirstNumber("");

        switch (buttonVal) {
            case "％":
                if (firstNumber !== "") {
                    setFirstNumber((parseFloat(firstNumber) / 100).toString());
                }
                break;
            default:
                setOperation(buttonVal);
                setSecondNumber(firstNumber);
                setFirstNumber("");
                break;
        }

    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };



    const compResult = () => {
        switch (operation) {
            case "+":
                clear(); //we'll clear  all the values  that we are having inside our variables and then we will set the result answer
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;

            default:
                // clear();
                setResult(0);
                break;
        }
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, { color: myColors.result }] : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]}>{result?.toString()}</Text>
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
        }
        if (firstNumber === "") {
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{firstNumber}</Text>
            );
        };
    };



    return (
        <View style={Styles.viewBottom}>
            <View style={{ height: 120, width: "90%", justifyContent: "flex-end", alignSelf: "center" }}>
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "orange", fontSize: 50, fontWeight: "500" }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Button title='C' isGray onPress={clear} />
                <Button title='+/-' isGray onPress={() => OperationPressHandler("+/-")} />
                <Button title="％" isGray onPress={() => OperationPressHandler("％")} />
                <Button title="÷" isBlue onPress={() => OperationPressHandler("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => NumberPressHandler("7")} />
                <Button title="8" onPress={() => NumberPressHandler("8")} />
                <Button title="9" onPress={() => NumberPressHandler("9")} />
                <Button title="×" isBlue onPress={() => OperationPressHandler("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => NumberPressHandler("4")} />
                <Button title="5" onPress={() => NumberPressHandler("5")} />
                <Button title="6" onPress={() => NumberPressHandler("6")} />
                <Button title="-" isBlue onPress={() => OperationPressHandler("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => NumberPressHandler("1")} />
                <Button title="2" onPress={() => NumberPressHandler("2")} />
                <Button title="3" onPress={() => NumberPressHandler("3")} />
                <Button title="+" isBlue onPress={() => OperationPressHandler("+")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => NumberPressHandler(".")} />
                <Button title="0" onPress={() => NumberPressHandler("0")} />
                <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => compResult()} />
            </View>
        </View>
    )
}

export default MyKeyboard
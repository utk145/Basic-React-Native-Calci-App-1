import { TouchableOpacity, View, Text } from "react-native";
import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";


interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

/* The interface keyword is not part of JavaScript syntax, it is a TypeScript feature.
In TypeScript, you can use the interface keyword to define a contract between the implementation of an object and the code that uses it. The interface defines the properties and methods that the object must have, and TypeScript checks that the object conforms to the interface at compile time.
When you define an interface in TypeScript, all the properties are required by default. This means that if you create an object based on the interface, you must provide values for all the properties defined in the interface.
However, sometimes you may want to define a property that is not required. In this case, you can use the `?:` syntax to make the property optional. If a property is optional, you do not need to provide a value for it when you create an object based on the interface.

*/

export default function Button({ isBlue, isGray, onPress, title }) {

    // A context in React is used for passing data through the component tree without having to pass props down manually at every level. A context provides a way to share data between components without having to use props.

    const theme = useContext(ThemeContext);


    return (
        <TouchableOpacity style={
            isBlue ? Styles.btnBlue
                : isGray
                    ? Styles.btnGray :
                    theme === "light" ?
                        Styles.btnLight : Styles.btnDark
        }
            onPress={onPress}
        >
            <Text style={
                isBlue || isGray
                    ? Styles.smallTextLight
                    : theme === "dark"
                        ? Styles.smallTextLight
                        : Styles.smallTextDark
            }>{title}</Text>
        </TouchableOpacity>


    )
}








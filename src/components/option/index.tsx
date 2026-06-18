import { colors } from "@/styles/colors";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    name: string,
    icon: keyof typeof MaterialIcons,
    variant?: "primary" | "secondary"
}


export function Option({name, icon, variant= "primary", ...rest}: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialIcons 
                name={icon} 
                size={20}
                color={variant === "primary"? colors.green[300] : colors.gray[400] }
                />

            <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}



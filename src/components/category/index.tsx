import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import { Pressable, Text } from "react-native";

import { styles } from "@/components/category/styles";
import { colors } from "@/styles/colors";

export function Category (){
    return (
        <Pressable style={styles.container}>
            <MaterialIcons name="code" size={16} color={colors.gray[400]} />
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    );
}
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>           
            </View>
            
            <Categories />
            
            <FlatList
                data={["1", "2", "3", "4", "5", "6"]}
                keyExtractor={(item) => item}
                renderItem={() => (<Link name="rocketseat" url="https://www.rocketseat.com.br/" onDetails={() => console.log("clicou")} />)}
                showsVerticalScrollIndicator={false}
                style={styles.links}
                contentContainerStyle={styles.linksContent}          
            />
            <Modal visible transparent>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>Rockeseat</Text>
                        <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>
                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary" />
                            <Option name="Excluir" icon="language"  />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}



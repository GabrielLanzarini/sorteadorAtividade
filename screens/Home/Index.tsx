import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard, Alert } from "react-native"
import style from "./style"
import { useEffect, useState } from "react"

export default function Home() {
    const [value, setValue] = useState("")
    const [vals, setVals] = useState<number[]>([])
    const [points, setPoints] = useState<number>(0)
    const [rank, setRank] = useState<number[]>([0, 0])
    const [operation, setOperation] = useState<string | "mais" | "menos" | "dividir" | "multiplicar">("")
    const operations = ["mais", "menos", "dividir", "multiplicar"]

    const randomNumber = (max: number, min: number) => Math.ceil(Math.random() * (max - min) + min)
    const randomValues = () => setVals([randomNumber(10, 1), randomNumber(10, 1)])
    const randomOperation = () => setOperation(operations[randomNumber(3, 0)])

    const handleClickSorter = () => {
        if (operation != "") return
        randomValues()
        randomOperation()
    }

    const verifyOperation = () => {
        if (operation == "mais") return +value == vals[0] + vals[1]
        if (operation == "menos") return +value == vals[0] - vals[1]
        if (operation == "dividir") return +value == vals[0] / vals[1]
        if (operation == "multiplicar") return +value == vals[0] * vals[1]
    }

    const refreshRank = () => {
        if (!verifyOperation()) {
            Alert.alert("Você Errou", "nova conta?", [
                {
                    text: "Sim",
                    onPress: () => {
                        randomValues()
                        randomOperation()
                        setValue("")
                    },
                },
                {
                    text: "Cancelar",
                    style: "cancel",
                },
            ])
            setRank((prev) => [prev[0], prev[1] + 1])
            setPoints((prev) => (prev > 5 ? prev - 5 : 0))
        } else {
            Alert.alert("Você Acertou", "nova conta?", [
                {
                    text: "Sim",
                    onPress: () => {
                        randomValues()
                        randomOperation()
                        setValue("")
                    },
                },
            ])
            setRank((prev) => [prev[0] + 1, prev[1]])
            setPoints((prev) => prev + 10)
        }
    }

    const newGame = () => {
        setRank([0, 0])
        setOperation("")
        setVals([])
        setPoints(0)
        setValue("")
    }

    return (
        <SafeAreaView onTouchStart={() => Keyboard.dismiss()} style={style.main_container}>
            <View style={style.top_container}>
                <Text style={style.main_text}>Você tem {points} pontos</Text>
                <View style={style.rank_container}>
                    <View style={style.rank_container_int}>
                        <Text style={[style.sub_text, { color: "#4EA8DE" }]}>Certas</Text>
                        <View style={style.text_count_container}>
                            <Text style={style.text_count}>{rank[0]}</Text>
                        </View>
                    </View>
                    <View style={style.rank_container_int}>
                        <Text style={[style.sub_text, { color: "#D34C6C" }]}>Erradas</Text>
                        <View style={style.text_count_container}>
                            <Text style={style.text_count}>{rank[1]}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={handleClickSorter} style={[style.purple_button]}>
                    <Text style={style.text_button}>Sortear Desafio</Text>
                </TouchableOpacity>
                <View style={style.border} />
            </View>
            <View style={style.middle_container}>
                <View>
                    <Text style={style.main_text_middle}>Quanto é:</Text>
                    <View style={style.container_row}>
                        <View style={style.sorter_container}>
                            <Text style={style.main_text}>{vals[0]}</Text>
                        </View>
                        <View style={style.sorter_container}>
                            {operation == "mais" && <Text style={style.main_text}>+</Text>}
                            {operation == "menos" && <Text style={style.main_text}>-</Text>}
                            {operation == "dividir" && <Text style={style.main_text}>/</Text>}
                            {operation == "multiplicar" && <Text style={style.main_text}>*</Text>}
                        </View>
                        <View style={style.sorter_container}>
                            <Text style={style.main_text}>{vals[1]}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={style.main_text_middle}>Informe a sua resposta:</Text>
                    <TextInput value={value} onChangeText={setValue} keyboardType="numbers-and-punctuation" style={style.input}></TextInput>
                </View>
                <TouchableOpacity onPress={refreshRank} style={style.green_button}>
                    <Text style={[style.text_button, { fontSize: 24 }]}>Validar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={newGame} style={style.red_button}>
                    <Text style={[style.text_button, { fontSize: 24 }]}>Novo Jogo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

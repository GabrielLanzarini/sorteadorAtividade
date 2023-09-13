import { StyleSheet } from "react-native"

export default StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#09090A",
    },
    top_container: {
        alignItems: "center",
        gap: 16,
    },
    main_text: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
    },
    sub_text: {
        color: "white",
        fontWeight: "bold",
    },
    rank_container: {
        padding: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rank_container_int: {
        flexDirection: "row",
        gap: 5,
    },
    text_count: {
        color: "white",
        fontWeight: "bold",
    },
    text_count_container: {
        backgroundColor: "#333",
        paddingHorizontal: 4,
        borderRadius: "100%",
    },
    purple_button: {
        backgroundColor: "#5D5FEF",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        width: 279,
        borderRadius: 12,
    },
    text_button: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    border: {
        backgroundColor: "#ECEDF0",
        height: 1,
        width: "100%",
    },
    middle_container: {
        flex: 1,
        paddingHorizontal: 50,
        paddingTop: 60,
        gap: 30,
    },
    container_row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    main_text_middle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    sorter_container: {
        marginTop: 33,
        width: 88,
        borderRadius: 16,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4AA5F9",
    },
    input: {
        width: 178,
        height: 74,
        backgroundColor: "#F6F6F6",
        borderRadius: 18,
        alignSelf: "center",
        marginTop: 14,
        textAlign: "center",
        fontSize: 25,
        color: "#8C4FCA",
        fontWeight: "bold",
    },
    green_button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#04D361",
        width: "100%",
        height: 60,
        borderRadius: 12,
    },
    red_button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#D34C6C",
        width: "80%",
        height: 60,
        borderRadius: 12,
        marginTop: 40
    },
})

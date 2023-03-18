import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectPdfMenu } from "../../redux/pdfMenuSlice";
import { selectDialog } from "../../redux/conversationSlice";

const styles = StyleSheet.create({
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "100%",
        height: "100%"
    },
    heading: {
        width: "100%",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30,
        fontWeight: "bold"
    },
    role: {
        fontSize: 20,
        color: "grey",
        marginBottom: 10
    },
    message: {
        fontSize: 15
    },
    messageBlock: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        padding: 5,
        border: true,
        borderRadius: 5
    }
});

const PdfDocument = (props) => {
    return (
        <Document>
            <Page>
                <Text style={styles.heading}>
                    ChatGPT Dialog
                </Text>
                {
                    props.renderArray.map((elem, index) => {
                        return (
                            <View key={index} style={styles.messageBlock}>
                                <Text style={styles.role}>
                                    {`${elem.source}:`}
                                </Text>
                                <Text style={styles.message}>
                                    {elem.message}
                                </Text>
                            </View>
                        )
                    })
                }
            </Page>
        </Document>  
    )
};

const PdfDownloadButton = () => {
    const { activeMessages } = useSelector(selectPdfMenu);
    const { dialog } = useSelector(selectDialog);
    let activeArray = [...activeMessages];
    let dialogArray = [];
    const sortArray = () => {
        activeArray.sort((a, b) => {
            return a - b;
        })
    };
    const filterMessages = () => {
        sortArray();
        activeArray.map((elem) => {
            dialogArray.push(dialog[elem]);
            console.log(dialog[elem]);
        });
        console.log(`activearray: ${activeArray}`);
        console.log(`dialogarray: ${dialogArray[0]}`);
    }
    filterMessages();
    return (
        <PDFDownloadLink document={<PdfDocument renderArray={dialogArray} />} fileName="example" style={styles.button}>
            <BsFillFileEarmarkPdfFill className="pdfCreator__menu__button__icon"/>
            Konversation als PDF runterladen
        </PDFDownloadLink>
    )
}

export default PdfDownloadButton;
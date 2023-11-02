import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 10,
  },
  item: {
    marginBottom: 10,
  },
  title: {
      fontSize: 16,
      fontWeight: "bold",
  },
    description: {
      fontSize: 12,
    },
    price: {
      fontSize: 14,
        fontWeight: "bold",
    },
});

const PriceListPDF = ({ items }) => {
    if (!items || !items.length) {
        return <Text>No items available</Text>;
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {items.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.desc}</Text>
                        <Text style={styles.price}>Price: {item.price}</Text>
                    </View>
                    ))}
            </Page>
        </Document>
        );
};

export default PriceListPDF;